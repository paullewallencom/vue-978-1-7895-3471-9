import { mount } from '@vue/test-utils'
import Example from '@/components/Example.vue'

describe('Example.vue', () => {
    it('renders Hello', () => {
       const wrapper = mount(Example)
       expect(wrapper.html()).toContain('<p>Hello</p>')
    })
})