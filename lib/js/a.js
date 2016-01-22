//模块化加载器实现原理

//http://www.ruanyifeng.com/blog/2015/05/commonjs-in-browser.html

var module = {
	exports: {}
};

(function(module, exports) {
	exports.base=100;
	exports.multiply = function (n) { return n * exports.base };
}(module, module.exports))


var f = module.exports.multiply;
f(5) // 5000 

//上面代码向一个立即执行函数提供 module 和 exports 两个外部变量，
//模块就放在这个立即执行函数里面。
//模块的输出值放在 module.exports 之中，这样就实现了模块的加载。
