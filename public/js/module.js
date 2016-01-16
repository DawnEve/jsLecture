//模块化
//依赖 自执行函数，命名空间，return等。
//原来模块本质上是“立即执行函数”返回的一个变量

//模块化的计数器
var module2 = function(){
	var _count = 0;
	
	var m1 = function(){
	　　//...
		console.log(++_count);
	};
	
	var m2 = function(){
	　　//...
		console.log(--_count);
	};
	return {
	　　a1 : m1,
	　　a2 : m2,
	　　a3 : m2,
	};
}();
//module2有2个私有方法，但是通过return返回了三个方法，
//并且暴漏出来的三个方法不受影响
//module2.m2='';//这个方法已经失效
//module3.m2();//这个方法还能正常运行。



//使用放大模式，添加2个功能：带前缀的计数器
var module2 = (function (mod){
	var _sufix='Dawn',  //这是私有变量
		_n=0;
	mod.set = function(sufix){
		_sufix=sufix;
	};
	
	mod.m4 = function () {
	　　//...
		//console.log(_count);//已经不能访问这个私有变量了
		console.log(_sufix + ++_n);
	};

	mod.m5 = function () {
	　　//...
		console.log(_sufix + --_n);
	};
	return mod;
})(module2);


//这时候如果不存在全局的module3，传入{}空对象即可。切记不可用module1替换window.module1。
var module3 = (function (mod){
	var _sufix='Dawn',
		_n=0;
	mod.set = function(sufix){
		_sufix=sufix;
	};

	mod.add = function () {
	　　//...
		console.log(_sufix + ++_n);
	};
	return mod;
})(window.module3 || {});
