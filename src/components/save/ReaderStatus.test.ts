import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ReaderStatus from './ReaderStatus.vue'

describe('ReaderStatus', () => {
  it('should map each reader state to its Spanish label', () => {
    expect(mount(ReaderStatus, { props: { state: 'idle' } }).get('.mp-reader-state').text()).toBe('En espera')
    expect(mount(ReaderStatus, { props: { state: 'reading' } }).get('.mp-reader-state').text()).toBe('Leyendo')
    expect(mount(ReaderStatus, { props: { state: 'done' } }).get('.mp-reader-state').text()).toBe('Completado')
    expect(mount(ReaderStatus, { props: { state: 'error' } }).get('.mp-reader-state').text()).toBe('Error')
  })

  it('should surface the error message as the hint when state is error', () => {
    const wrapper = mount(ReaderStatus, { props: { state: 'error', errorMsg: 'Archivo inválido' } })
    expect(wrapper.get('.mp-reader-hint').text()).toBe('Archivo inválido')
  })

  it('should always show the accepted format, upload state and offline reading', () => {
    const text = mount(ReaderStatus, { props: { state: 'idle' } }).text()
    expect(text).toContain('.rxdata')
    expect(text).toContain('Ninguna')
    expect(text).toContain('Offline')
  })

  it('should show the file name when one is loaded and "Sin cargar" otherwise', () => {
    expect(mount(ReaderStatus, { props: { state: 'idle' } }).text()).toContain('Sin cargar')
    const wrapper = mount(ReaderStatus, { props: { state: 'done', fileName: 'Partida 1.rxdata' } })
    expect(wrapper.text()).toContain('Partida 1.rxdata')
  })
})
