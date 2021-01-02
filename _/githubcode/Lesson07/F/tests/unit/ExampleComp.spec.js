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

    it('input should show up on output section', (done) => {
        const wrapper = mount(Example)
        const vm = wrapper.vm
        const inputEl = vm.$el.querySelector('#name')
        const outputEl = vm.$el.querySelector('#output')

        inputEl.value = 'Herman'
        expect(outputEl.textContent).not.toContain('Herman')
        inputEl.dispatchEvent(new Event('input'))
        vm.$nextTick(() => {
            expect(outputEl.textContent).toContain('Herman')
            done()
        })

    })

})