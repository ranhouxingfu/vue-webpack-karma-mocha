import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
 // describe的生命周期
describe('hooks', function() {

before(() => {
  // 在本区块的所有测试用例之前执行
})

after(() => {
  // 在本区块的所有测试用例之后执行
})

beforeEach(() => {
  // 在本区块的每个测试用例之前执行
})

afterEach(() => {
  // 在本区块的每个测试用例之后执行
})

// test cases
})
