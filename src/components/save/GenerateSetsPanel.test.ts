import { describe, expect, it, vi, beforeEach } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import GenerateSetsPanel from './GenerateSetsPanel.vue'
import * as editor from '../../lib/saveEditor'

vi.mock('../../lib/saveEditor', () => ({
  applyRecommendedSets: vi.fn(),
  downloadBytes: vi.fn()
}))

interface DialogPolyfill { showModal?: () => void; close?: () => void; open?: boolean }
const proto = HTMLDialogElement.prototype as unknown as DialogPolyfill
if (typeof proto.showModal !== 'function') proto.showModal = function (this: DialogPolyfill) { this.open = true }
if (typeof proto.close !== 'function') proto.close = function (this: DialogPolyfill) { this.open = false }

const applyMock = editor.applyRecommendedSets as unknown as ReturnType<typeof vi.fn>
const downloadMock = editor.downloadBytes as unknown as ReturnType<typeof vi.fn>

function okResult(over: Partial<editor.ApplyResult> = {}): editor.ApplyResult {
  return {
    output: new Uint8Array([1, 2, 3]),
    records: [],
    totals: { mons: 3, applied: 3, skipped: 0, natureApplied: 0, megaApplied: 0, structuralDiffs: 0, verifyFail: 0 },
    diffs: [],
    verified: true,
    ...over
  }
}

function openPanel(fileName = 'Partida 1.rxdata', species: string[] = []) {
  const wrapper = mount(GenerateSetsPanel, { props: { bytes: new Uint8Array([9]), fileName, species }, attachTo: document.body })
  wrapper.get('.gs-trigger').trigger('click')
  return wrapper
}

beforeEach(() => {
  applyMock.mockReset()
  downloadMock.mockReset()
})

describe('GenerateSetsPanel', () => {
  it('should not render a trigger without a loaded save', () => {
    const wrapper = mount(GenerateSetsPanel, { props: { bytes: null, fileName: '', species: [] } })
    expect(wrapper.find('.gs-trigger').exists()).toBe(false)
  })

  it('should hide the mega section when there are no owned species', () => {
    const wrapper = openPanel('save.rxdata', [])
    expect(wrapper.find('.gs-mega').exists()).toBe(false)
  })

  it('should list a per-species mega picker and forward the choices', async () => {
    applyMock.mockResolvedValue(okResult())
    const wrapper = openPanel('save.rxdata', ['CHARIZARD'])

    const rows = wrapper.findAll('.gs-mega-row')
    expect(rows.length).toBe(1)
    expect(rows[0].text()).toContain('Charizard')
    const options = rows[0].findAll('option').map(o => o.text())
    expect(options[0]).toBe('Forma base')
    expect(options.length).toBeGreaterThan(1)

    await rows[0].get('select').setValue(options[1])
    await wrapper.get('.gs-run').trigger('click')
    await flushPromises()

    const call = applyMock.mock.calls[0][1] as editor.ApplyOptions
    expect(call.megaChoices).toEqual({ CHARIZARD: options[1] })
  })

  it('should generate and offer a download named after the save file', async () => {
    applyMock.mockResolvedValue(okResult({ totals: { mons: 3, applied: 3, skipped: 1, natureApplied: 0, megaApplied: 0, structuralDiffs: 0, verifyFail: 0 } }))
    const wrapper = openPanel('Partida 1.rxdata')

    await wrapper.get('.gs-run').trigger('click')
    await flushPromises()

    expect(applyMock).toHaveBeenCalledWith(expect.any(Uint8Array), { includeNatureItemAbility: false, onlyOptimo: false, megaChoices: {} })
    const dl = wrapper.get('.gs-dl')
    expect(dl.text()).toContain('Partida 1 (sets aplicados).rxdata')

    await dl.trigger('click')
    expect(downloadMock).toHaveBeenCalledWith(expect.any(Uint8Array), 'Partida 1 (sets aplicados).rxdata')
  })

  it('should forward the nature/item/ability toggle to the editor', async () => {
    applyMock.mockResolvedValue(okResult())
    const wrapper = openPanel('save.rxdata')

    expect(wrapper.findAll('.gs-opt')).toHaveLength(1)
    await wrapper.get('.gs-opt input').setValue(true)
    await wrapper.get('.gs-run').trigger('click')
    await flushPromises()

    expect(applyMock).toHaveBeenCalledWith(expect.any(Uint8Array), { includeNatureItemAbility: true, onlyOptimo: false, megaChoices: {} })
  })

  it('should hide the download and warn when verification fails', async () => {
    applyMock.mockResolvedValue(okResult({
      verified: false,
      diffs: ['$.player.something'],
      totals: { mons: 3, applied: 3, skipped: 0, natureApplied: 0, megaApplied: 0, structuralDiffs: 1, verifyFail: 2 }
    }))
    const wrapper = openPanel('save.rxdata')

    await wrapper.get('.gs-run').trigger('click')
    await flushPromises()

    expect(wrapper.find('.gs-dl').exists()).toBe(false)
    expect(wrapper.get('.gs-chip.is-bad').text()).toContain('verificación falló')
    expect(wrapper.text()).toContain('No se ofrece la descarga')
  })

  it('should surface an error message when the editor throws', async () => {
    applyMock.mockRejectedValue(new Error('boom'))
    const wrapper = openPanel('save.rxdata')

    await wrapper.get('.gs-run').trigger('click')
    await flushPromises()

    expect(wrapper.get('.gs-error').text()).toBe('boom')
  })
})
