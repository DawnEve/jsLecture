// plugins/i18n.js
//这是一个vue插件，是一个单独的文件
//随后，我们通过 app.use 来调用这个plugin

export default {
  install: (app, options) => {
    // Plugin code goes here
    var log=console.log;
    log('I am plugins 06.js')

    app.config.globalProperties.$translate = key => {
        return key.split('.').reduce((o, i) => {
            if (o) return o[i]
        }, options)
    }

    app.provide('i18n', options)

    app.directive('my-directive', {
        mounted (el, binding, vnode, oldVnode) {
          // some logic ...
        },
        
    })
    
    
    //这个插件本质上做的工作就是通过调用Vue.mixin向Vue全局构造函数中添加相应的mounted hook
    app.mixin({
        created() { //任何组件挂载都会执行
            // some logic ...
            console.log('I’m Mounted!', this.$data);
        },

    })



  }
}