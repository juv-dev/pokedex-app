import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ImportSaveView from './ImportSaveView.vue'
import FileDropzone from './FileDropzone.vue'
import type { SaveStatus } from '../../composables/useSaveFile'

function mountView(status: SaveStatus, statusMessage = '') {
  return mount(ImportSaveView, { props: { status, fileName: null, statusMessage } })
}

describe('ImportSaveView', () => {
  it('should map the analysis states onto the dropzone', () => {
    expect(mountView('sin-archivo').findComponent(FileDropzone).props('state')).toBe('idle')
    expect(mountView('analizando').findComponent(FileDropzone).props('state')).toBe('loading')
    expect(mountView('analizada').findComponent(FileDropzone).props('state')).toBe('success')
  })

  it('should surface every failure state as an error on the dropzone', () => {
    for (const status of ['incompatible', 'error-lectura', 'corrupto'] as SaveStatus[]) {
      const wrapper = mountView(status, 'algo salió mal')
      expect(wrapper.findComponent(FileDropzone).props('state')).toBe('error')
      expect(wrapper.findComponent(FileDropzone).props('statusMsg')).toBe('algo salió mal')
    }
  })

  it('should highlight the state chip that matches the current status', () => {
    expect(mountView('sin-archivo').findAll('.imp-state.is-active')).toHaveLength(0)
    expect(mountView('analizada').get('.imp-state.is-active').text()).toContain('Archivo válido')
    expect(mountView('analizando').get('.imp-state.is-active').text()).toContain('Analizando partida')
    expect(mountView('corrupto').get('.imp-state.is-active').text()).toContain('Formato no compatible')
  })

  it('should forward the chosen file', () => {
    const wrapper = mountView('sin-archivo')
    const file = new File(['x'], 'Partida 1.rxdata')
    wrapper.findComponent(FileDropzone).vm.$emit('file', file)
    expect(wrapper.emitted('file')?.[0]).toEqual([file])
  })

  it('should list what the analysis will read', () => {
    const text = mountView('sin-archivo').text()
    expect(text).toContain('QUÉ SE ANALIZARÁ')
    expect(text).toContain('Equipo actual')
    expect(text).toContain('Datos competitivos')
  })
})
