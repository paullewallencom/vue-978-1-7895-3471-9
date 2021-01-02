import { mount } from '@vue/test-utils'
import RetrieveText from '@/components/RetrieveText.vue'
import sinon from 'sinon'
import axios from 'axios'

describe('RetrieveText.vue', () => {
    it('populates post with api call result', (done) => {
        const sandbox = sinon.createSandbox()

        const promise = new Promise(res => {
            res({
                data: {
                    body: 'Hello World'
                }
            })
        })

        sandbox.stub(axios, 'get').returns(promise)
        const wrapper = mount(RetrieveText)
        const vm = wrapper.vm

        vm.retrieve()

        promise.then(() => {
            expect(vm.post).toEqual('Hello World')
            done()
        })

    })
})