import Vue from 'vue'
import linkified from '../../dist/vue-linkify.min.js'

Vue.directive('linkified', linkified)
// TODO: Pending Tests.
describe('vue-linkify', () => {
  it('should correctly linkify content', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      data: { raw: 'Hello from vuejs.org' },
      template: '<div v-html="raw" v-linkified />'
    }).$mount()

    expect(vm.$el.innerHTML).to.be
      .equal('Hello from <a href="http://vuejs.org" class="linkified" target="_blank">vuejs.org</a>')
  })
 
})
