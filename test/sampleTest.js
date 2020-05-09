import Vue from "vue";
import linkify from '../dist/vue-linkify-hashtags-mentions.min.js'


Vue.directive("linkified", linkify);
var expect = require("chai").expect;

describe("vue-linkify-hashtags-mentions", () => {
  
  it("should correctly linkify content", () => {
    const vm = new Vue({
      el: document.createElement("div"),
      data: {
        raw: "Hello from vuejs.org #india @hrank8t",
      },
      template: '<div v-html="raw" v-linkified />',
    }).$mount();

    expect(vm.$el.innerHTML).to.be.equal(
      'Hello from <a href="http://vuejs.org" class="linkified" target="_blank">vuejs.org</a> <a href="/hashtag/india" class="hashtag">#india</a> <a href="/mention/hrank8t" class="mention">@hrank8t</a>'
    );
  });

  it("should correctly linkify content", () => {
    const vm = new Vue({
      el: document.createElement("div"),
      data: {
        raw: "#india",
      },
      template: '<div v-html="raw" v-linkified />',
    }).$mount();

    expect(vm.$el.innerHTML).to.be.equal(
      '<a href="/hashtag/india" class="hashtag">#india</a>'
    );
  });

  it("should correctly linkify content", () => {
    const vm = new Vue({
      el: document.createElement("div"),
      data: {
        raw: "@hrank8t",
      },
      template: '<div v-html="raw" v-linkified />',
    }).$mount();

    expect(vm.$el.innerHTML).to.be.equal(
      '<a href="/mention/hrank8t" class="mention">@hrank8t</a>'
    );
  });
});
