
===========================================
	按照功能分类的js常用函数
===========================================
1.先实现功能，再兼容；
2.先手工导入，再用函数导入（异步），再考虑依赖性问题；
3.先实现模块，再解决模块重名问题；
===========================================

文件定义：
/***********************************************
 * JavaScript Library v1.10.2
 *
 * This class enables you to mark points and calculate the time difference
 * 类名时驼峰法，方法名是下划线法。
 *
 * @version		v1.0.0
 * @revise		2016.01.15
 * @date		2016.01.15
 * @author		Dawn
 * @email		JimmyMall@live.com
 * @link		https://github.com/DawnEve/DawnPHPTools 
 * Released under the MIT license
 ***********************************************/
 
===========================================
	测试结果：
===========================================
源文件在lib/js/,测试例子在test-js/

001.cookie.js		[--]

002.url.js	[ok]

003.hook.js	[--] 没看懂
	JS钩子的机制与实现 http://www.phper.org.cn/index.php?m=content&a=show&post_id=378

004.module.js		[ok] 只能自己运行，无法复用代码
005.loader.js



==================================
自运行函数 
	国外好像喜欢(function(){}());
	国内比较喜欢(function(){})();
(function(){}())是使用了强制运算符执行函数调用运算，
(function(){})()是通过函数调用运算符操作函数引用。
两者功能上是一致的，只是运算过程不同。



===========================================
	下一个话题：
===========================================
promise.js
http://www.zhihu.com/question/21157540
http://annn.me/ecmascript6-promise/


loader.js
https://github.com/ErosZy/UME.js/blob/master/UME.js
https://github.com/yanhaijing/lodjs
https://github.com/liulyliu/iWo/blob/master/src/iwo.loader.js
司徒正美的<<JavaScript框架设计>>看看,书的第二章详细讲解了js的模块系统原理.

RequireJS 与 SeaJS 的异同
https://github.com/seajs/seajs/issues/277
AMD 和 CMD 的区别有哪些？ 
http://www.zhihu.com/question/20351507/answer/14859415
浏览器环境模块加载个人推荐用：SeaJS



===========================================
	书籍与博客：
===========================================
2010-03-12 JavaScript Module Pattern: In-Depth
http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html

阮一峰的随笔（登陆页很简洁）
https://www.textarea.com/?utm_source=ruanyifeng.com

UI看着很严肃
http://phabricator.org/
