import { mount } from '@vue/test-utils'
import Game from '@/components/Game.vue'

describe('my app', () => {
    let vm
    beforeEach(() => {
        const wrapper = mount(Game)
        vm = wrapper.vm
        vm.number = 5
    })


    it('should output thats right if guess is 5', () => {
        vm.guess = 5
        expect(vm.output).toBe("That's right!")
    })

    it('should output higher... if guess is 4', () => {
        vm.guess = 4
        expect(vm.output).toBe('Higher...')
    })

    it('should output lower... if guess is 6', () => {
        vm.guess = 6
        expect(vm.output).toBe('Lower...')
    })

    it('should say not even close if guess is above 20', () => {
        vm.guess = 21
        expect(vm.output).toBe('Not even close!')
    })
})
