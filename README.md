# Fork of https://github.com/phanan/vue-linkify

> A simple Vue directive to turn URL's and emails into clickable links. Based on SoapBox's [Linkify](https://github.com/SoapBox/linkifyjs).

## Install


## Basic Usage

In a browser environment, you should now have a `v-linkified` directive set up for free. If you're in a module environment, just `import` and register it as you please:

``` js
import linkify from '/your-path/to/vue-linkify'

Vue.directive('linkified', linkify)
```

And then you use it away:

``` html
<template>
  <div id="app">
    <div v-html="raw" v-linkified />
  </div>
</template>
<script>
export default {
  data () {
    return {
      raw: 'Hello from vuejs.org #India @hrank8t'
    }
  }
}
</script>
```

The above snippet will yield:

``` html
Hello from <a href="http://vuejs.org" class="linkified" target="_blank">vuejs.org</a> <a href="/hashtag/India" class="hashtag">#India</a> <a href="/mention/hrank8t" class="mention">@hrank8t</a> 
```

A list of available options is available [here](http://soapbox.github.io/linkifyjs/docs/options.html).

## License

MIT &copy; [HRAnkit](https://github.com/HRankit)
