import { mount } from '@vue/test-utils'
import Example from '@/components/Example.vue'

describe('Example.vue', () => {
    it('renders Hello', () => {
       const wrapper = mount(Example)
       expect(wrapper.html()).toContain('<p>Hello</p>')
    })

    it('renders translate button', () => {
        const wrapper = mount(Example)
        expect(wrapper.find('button').html('Ciao Mondo!'))
    })

    it('renders italian after italian button is clicked', () => {
        const wrapper = mount(Example)
        wrapper.find('button').trigger('click')
        expect(wrapper.html()).toContain('<p>Ciao Mondo!</p>')
    })
})