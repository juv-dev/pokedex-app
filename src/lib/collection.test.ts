import { describe, expect, it } from 'vitest'
import type { TeamSummary } from './team'
import {
  loadInternalNames,
  markInternalName,
  saveInternalNames,
  uniqueOwnedInternalNames
} from './collection'

describe('should persist collection counters by internal species name', () => {
  it('should normalize and deduplicate stored internal names', () => {
    localStorage.setItem('seen', JSON.stringify(['BULBASAUR', 'bulbasaur', '', 25]))

    expect(loadInternalNames('seen')).toEqual(['BULBASAUR'])
  })

  it('should add a seen species without mutating the previous collection', () => {
    const current = ['BULBASAUR']

    expect(markInternalName(current, 'ivysaur')).toEqual(['BULBASAUR', 'IVYSAUR'])
    expect(current).toEqual(['BULBASAUR'])
  })

  it('should save only stable normalized internal names', () => {
    saveInternalNames('seen', ['bulbasaur', 'BULBASAUR', 'ivysaur'])

    expect(localStorage.getItem('seen')).toBe('["BULBASAUR","IVYSAUR"]')
  })

  it('should count owned species once even when the save has duplicates', () => {
    const summaries = [
      { internalName: 'BULBASAUR' },
      { internalName: 'BULBASAUR' },
      { internalName: 'IVYSAUR' }
    ] as TeamSummary[]

    expect(uniqueOwnedInternalNames(summaries)).toEqual(['BULBASAUR', 'IVYSAUR'])
  })
})
