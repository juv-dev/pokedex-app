import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import FileDropzone from './FileDropzone.vue'

describe('FileDropzone', () => {
  it('should render the action button and the requirement hints', () => {
    const wrapper = mount(FileDropzone)
    expect(wrapper.text()).toContain('Elegir archivo de partida')
    expect(wrapper.text()).toContain('Solo .rxdata')
    expect(wrapper.text()).toContain('Tu archivo permanece privado')
  })

  it('should emit the selected file from the input change', async () => {
    const wrapper = mount(FileDropzone)
    const file = new File(['x'], 'save.rxdata')
    const input = wrapper.get('input[type="file"]')
    Object.defineProperty(input.element, 'files', { value: [file], configurable: true })
    await input.trigger('change')
    expect(wrapper.emitted('file')?.[0]?.[0]).toBe(file)
  })

  it('should take over with an explicit loading state while reading the file', () => {
    const wrapper = mount(FileDropzone, { props: { state: 'loading' } })
    expect(wrapper.attributes('aria-busy')).toBe('true')
    expect(wrapper.find('.mp-drop-spinner').exists()).toBe(true)
    expect(wrapper.get('.mp-drop-title').text()).toContain('Leyendo tu partida')
    expect(wrapper.text()).not.toContain('Elegir archivo de partida')
  })

  it('should reflect the error state on the container', () => {
    const wrapper = mount(FileDropzone, { props: { state: 'error', statusMsg: 'No se pudo leer' } })
    expect(wrapper.classes()).toContain('is-error')
    expect(wrapper.get('.mp-drop-status').text()).toBe('No se pudo leer')
  })
})
