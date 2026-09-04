import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import FileDropzone from './FileDropzone.vue'

describe('FileDropzone', () => {
  it('should render the action button and the usual path hint', () => {
    const wrapper = mount(FileDropzone)
    expect(wrapper.text()).toContain('Elegir archivo de partida')
    expect(wrapper.get('.mp-drop-path').text()).toContain('Partida 1.rxdata')
    expect(wrapper.text()).toContain('no se envía a ningún servidor')
  })

  it('should emit the selected file from the input change', async () => {
    const wrapper = mount(FileDropzone)
    const file = new File(['x'], 'save.rxdata')
    const input = wrapper.get('input[type="file"]')
    Object.defineProperty(input.element, 'files', { value: [file], configurable: true })
    await input.trigger('change')
    expect(wrapper.emitted('file')?.[0]?.[0]).toBe(file)
  })

  it('should show a busy state while loading', () => {
    const wrapper = mount(FileDropzone, { props: { state: 'loading' } })
    expect(wrapper.attributes('aria-busy')).toBe('true')
    expect(wrapper.find('.mp-drop-spinner').exists()).toBe(true)
  })

  it('should reflect the error state on the container', () => {
    const wrapper = mount(FileDropzone, { props: { state: 'error', statusMsg: 'No se pudo leer' } })
    expect(wrapper.classes()).toContain('is-error')
    expect(wrapper.get('.mp-drop-status').text()).toBe('No se pudo leer')
  })
})
