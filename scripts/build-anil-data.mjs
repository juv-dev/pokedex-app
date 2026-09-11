import { readFileSync, writeFileSync } from 'fs';

const PBS = process.env.ANIL_PBS || 'C:/Jesús/Game/POKEMON ANIL V4.13/Pokemon Anil V4.13/PBS/';
const OUT = process.env.ANIL_OUT || 'C:/Developers/Github/pokedex-app/src/data/';

function splitList(raw) {
  if (!raw) return [];
  return raw.split(',').map(s => s.trim()).filter(s => s.length > 0);
}

function parseBlocks(text) {
  const lines = text.split(/\r?\n/);
  const blocks = [];
  let cur = null;
  for (const raw of lines) {
    const line = raw.replace(/^\uFEFF/, '');
    const head = line.match(/^\[([^\]]+)\]\s*$/);
    if (head) {
      if (cur) blocks.push(cur);
      cur = { id: head[1], fields: {} };
      continue;
    }
    if (!cur) continue;
    const kv = line.match(/^([A-Za-z_]+)\s*=\s*(.*)$/);
    if (kv) cur.fields[kv[1]] = kv[2];
  }
  if (cur) blocks.push(cur);
  return blocks;
}

// ---- moves.txt: number (ordinal) + real stats ----
const movesText = readFileSync(PBS + 'moves.txt', 'utf8');
const moveBlocks = parseBlocks(movesText);
const moveNumbers = {};
const moveData = {};
moveBlocks.forEach((b, i) => {
  const n = i + 1;
  moveNumbers[b.id] = n;
  moveData[b.id] = {
    name: b.fields.Name || b.id,
    type: (b.fields.Type || '').toLowerCase(),
    category: b.fields.Category || 'Status',
    power: b.fields.Power ? parseInt(b.fields.Power, 10) : null,
    accuracy: b.fields.Accuracy ? parseInt(b.fields.Accuracy, 10) : null,
    pp: b.fields.TotalPP ? parseInt(b.fields.TotalPP, 10) : null,
    description: b.fields.Description || '',
    functionCode: b.fields.FunctionCode || '',
    flags: splitList(b.fields.Flags),
    priority: b.fields.Priority ? parseInt(b.fields.Priority, 10) : 0,
    target: b.fields.Target || '',
    effectChance: b.fields.EffectChance ? parseInt(b.fields.EffectChance, 10) : null
  };
});
writeFileSync(OUT + 'anil-move-numbers.json', JSON.stringify(moveNumbers));
writeFileSync(OUT + 'anil-moves.json', JSON.stringify(moveData));
console.log('moves:', moveBlocks.length);

// ---- abilities.txt: internal -> Spanish name + ordinal (position in the PBS file) ----
const abilitiesText = readFileSync(PBS + 'abilities.txt', 'utf8');
const abilityBlocks = parseBlocks(abilitiesText);
const abilityNames = {};
const abilityNumbers = {};
const abilityDetails = {};
abilityBlocks.forEach((b, i) => {
  abilityNames[b.id] = b.fields.Name || b.id;
  abilityNumbers[b.id] = i + 1;
  abilityDetails[b.id] = {
    name: b.fields.Name || b.id,
    description: b.fields.Description || '',
    flags: splitList(b.fields.Flags)
  };
});
writeFileSync(OUT + 'anil-abilities.json', JSON.stringify(abilityNames));
writeFileSync(OUT + 'anil-ability-numbers.json', JSON.stringify(abilityNumbers));
writeFileSync(OUT + 'anil-ability-details.json', JSON.stringify(abilityDetails));
console.log('abilities:', abilityBlocks.length);

// ---- items.txt: internal -> Spanish name + ordinal (position in the PBS file) ----
const itemsText = readFileSync(PBS + 'items.txt', 'utf8');
const itemBlocks = parseBlocks(itemsText);
const itemNames = {};
const itemNumbers = {};
const itemDetails = {};
itemBlocks.forEach((b, i) => {
  itemNames[b.id] = b.fields.Name || b.id;
  itemNumbers[b.id] = i + 1;
  itemDetails[b.id] = {
    name: b.fields.Name || b.id,
    description: b.fields.Description || '',
    flags: splitList(b.fields.Flags),
    pocket: b.fields.Pocket || null
  };
});
writeFileSync(OUT + 'anil-items.json', JSON.stringify(itemNames));
writeFileSync(OUT + 'anil-item-numbers.json', JSON.stringify(itemNumbers));
writeFileSync(OUT + 'anil-item-details.json', JSON.stringify(itemDetails));
console.log('items:', itemBlocks.length);

function parseEvolutions(raw) {
  if (!raw) return [];
  const parts = raw.split(',');
  const out = [];
  for (let i = 0; i + 1 < parts.length; i += 3) {
    out.push({ target: parts[i], method: parts[i + 1], param: parts[i + 2] || null });
  }
  return out;
}

// ---- pokemon_forms.txt: mega evolutions + form-specific evolutions (regional/Hisui/Paldea) ----
const formsText = readFileSync(PBS + 'pokemon_forms.txt', 'utf8');
const formBlocks = parseBlocks(formsText);
const megas = {}; // speciesInternal -> [{formName, megaStone, megaStoneName, baseStats, abilities}]
const formEvolutions = {}; // speciesInternal -> [{form, formName, evolutions:[{target,method,param}]}]
formBlocks.forEach(b => {
  const [species, formIdx] = b.id.split(',');
  if (b.fields.Evolutions && b.fields.Evolutions.trim()) {
    (formEvolutions[species] = formEvolutions[species] || []).push({
      form: formIdx ? parseInt(formIdx, 10) : 0,
      formName: b.fields.FormName || null,
      evolutions: parseEvolutions(b.fields.Evolutions)
    });
  }
  if (!b.fields.MegaStone && !b.fields.MegaMove) return;
  const entry = {
    formName: b.fields.FormName || null,
    megaStone: b.fields.MegaStone || null,
    megaStoneName: b.fields.MegaStone ? (itemNames[b.fields.MegaStone] || b.fields.MegaStone) : null,
    megaMove: b.fields.MegaMove || null,
    baseStats: (() => {
      if (!b.fields.BaseStats) return null;
      const raw6 = b.fields.BaseStats.split(',').map(Number);
      return raw6.length === 6 ? [raw6[0], raw6[1], raw6[2], raw6[4], raw6[5], raw6[3]] : raw6;
    })(),
    types: b.fields.Types ? b.fields.Types.split(',').map(t => t.trim().toLowerCase()) : null,
    abilities: b.fields.Abilities ? b.fields.Abilities.split(',').map(a => a.trim()).filter(Boolean) : null
  };
  (megas[species] = megas[species] || []).push(entry);
});
console.log('species with mega forms:', Object.keys(megas).length);

// ---- pokemon.txt: full species data + evolutions ----
const pokeText = readFileSync(PBS + 'pokemon.txt', 'utf8');
const pokeBlocks = parseBlocks(pokeText);
const pokedex = {};
pokeBlocks.forEach(b => {
  const f = b.fields;
  if (!f.BaseStats) return;
  // PBS order: HP, Attack, Defense, Speed, SpAtk, SpDef -> remap to HP,Atk,Def,SpA,SpD,Spe
  const raw6 = f.BaseStats.split(',').map(Number);
  const baseStats = raw6.length === 6 ? [raw6[0], raw6[1], raw6[2], raw6[4], raw6[5], raw6[3]] : raw6;
  pokedex[b.id] = {
    name: f.Name || b.id,
    types: (f.Types || '').split(',').map(t => t.toLowerCase()),
    baseStats,
    category: f.Category || '',
    flavor: f.Pokedex || '',
    heightM: f.Height ? parseFloat(f.Height) : 0,
    weightKg: f.Weight ? parseFloat(f.Weight) : 0,
    abilities: [
      ...(f.Abilities ? f.Abilities.split(',').map(a => a.trim()).filter(Boolean).map(a => ({ id: a, name: abilityNames[a] || a, hidden: false })) : []),
      ...(f.HiddenAbilities ? f.HiddenAbilities.split(',').map(a => a.trim()).filter(Boolean).map(a => ({ id: a, name: abilityNames[a] || a, hidden: true })) : [])
    ],
    catchRate: f.CatchRate ? parseInt(f.CatchRate, 10) : null,
    happiness: f.Happiness ? parseInt(f.Happiness, 10) : null,
    growthRate: f.GrowthRate || null,
    eggGroups: f.EggGroups ? f.EggGroups.split(',') : [],
    genderRatio: f.GenderRatio || null,
    baseExp: f.BaseExp ? parseInt(f.BaseExp, 10) : null,
    evolutions: parseEvolutions(f.Evolutions),
    formEvolutions: formEvolutions[b.id] || [],
    megas: megas[b.id] || [],
    tutorMoves: splitList(f.TutorMoves),
    eggMoves: splitList(f.EggMoves),
    levelMoves: (() => {
      if (!f.Moves) return [];
      const parts = f.Moves.split(',');
      const out = [];
      for (let i = 0; i + 1 < parts.length; i += 2) out.push({ level: parseInt(parts[i], 10), move: parts[i + 1] });
      return out;
    })()
  };
});
writeFileSync(OUT + 'anil-pokedex.json', JSON.stringify(pokedex));
console.log('species written:', Object.keys(pokedex).length);

// ---- anil-schema.json: shape/version marker consumed by anilData.assertAnilSchema ----
const schema = {
  version: 2,
  generatedAt: new Date().toISOString(),
  counts: {
    pokemon: Object.keys(pokedex).length,
    moves: Object.keys(moveData).length,
    abilities: Object.keys(abilityDetails).length,
    items: Object.keys(itemDetails).length
  }
};
writeFileSync(OUT + 'anil-schema.json', JSON.stringify(schema, null, 2));
console.log('schema:', JSON.stringify(schema));

// which species are custom (not resolvable to a real PokeAPI slug via simple heuristics)?
console.log('sample custom check - ROYALEON:', !!pokedex['ROYALEON'], pokedex['ROYALEON'] && pokedex['ROYALEON'].name);
