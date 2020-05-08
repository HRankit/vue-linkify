/*global define*/
import * as linkify from 'linkifyjs'
import linkifyHtml from 'linkifyjs/html'
import hashtag from 'linkifyjs/plugins/hashtag'
import mention from 'linkifyjs/plugins/mention'

hashtag(linkify); mention(linkify);

(function () {
  function install (el, binding) {
    el.innerHTML = linkifyHtml(el.innerHTML, {
      nl2br: true, // optional
      formatHref: {
        hashtag: href => `/hashtag/${href.replace('#', '')}`,
        mention: href => `/mention${href.replace('@', '')}`
      },
      className: {
        hashtag: 'hashtag',
        mention: 'mention'
      }
    })
  }

  if (typeof exports === 'object') {
    module.exports = install
  } else if (typeof define === 'function' && define.amd) {
    define([], function () {
      return install
    })
  } else if (window.Vue) {
    window.Vue.directive('linkified', install)
  }
})()
