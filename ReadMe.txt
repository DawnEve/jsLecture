尚学堂科技_马士兵_Javascript视频.第1-12讲
很基础。不过学到了一些东西。

1.很酷的东西不一定复杂，不一定有用。
2.调试是一个很艰难的事情，因为js错误很多时候不报告，而且还默默地运行着；
	另外即便报错，如果是php动态生成的，行数也是错误的。


为了方便顺序目录调整，根文件夹都不加数字序号。



------------------------
第0章 js初步和调试 debug/

1.js核心、Dom、Bom共3种；

2.模态：alert窗口就是；
	你不处理就不能继续。

3.console.log() 调试





------------------------
第1章 js基本语法 base/

引用对象:Array、Object、Function

1. 数据类型与变量、运算符

2. 控制结构

3. 字符串 String

4. 数组 Array
	arr=[];//初始化
	arr[0]=0;//赋值
	arr.length;//数组长度

5. 对象 Object

var obj={};
new 和 this



6. Map 和 Set 

7. iterable


标准对象

8. 日期 Date
9. 正则表达式 RegExp
10. JSON 对象






------------------------
第2章 函数 Function/

1. 函数的定义和调用
函数、匿名函数、函数嵌套

function aa(){}
var aa=function(){}



2. 变量作用域与结构赋值

只有全局变量和函数体局部变量；
	只要首次出现不加var的都是全局变量：按照原型链上溯，最后添加到window对象上，就成全局变量了。


3. 方法



4. this 与 链式调用


5. arguments对象



6. 高阶函数
map/reduce
filter
sort
Array


7. 闭包 与 立即执行函数


8. 箭头函数



9. generator




------------------------
第3章 面向对象编程 OOP/

很难！原型链、闭包；模拟类

1. 创建对象

2. 原型继承

作用域scope、闭包closure、原型、继承、类的实现、
模块模式、沙箱模式、
单例模式、

- this的意义：当前对象本身，但是有很多意外解释//todo
- with(document){write('some text');}
- new: 创建新对象，new的时候发生了什么？


3. class 继承




------------------------
第4章 文档对象模型 DOM/

dom获取、dom创建、dom属性添加、dom插入、dom删除、dom克隆、
兼容性的处理、

css属性获取与设定、




------------------------
第5章 浏览器对象模型 BOM/

1.alert:弹出警告等信息；
2.prompt:输入框,第一个参数是提示语句，第二个是默认值；
3.confirm:确认框,很有用：你确认要删除吗？

4.window
	- 当前窗口
	- 新开窗口
	- 通过本地窗口控制新开的窗口
	不过现在不常用了，因为被流氓网站用烂了。

5.location 重定向:当前地址栏的url
6.history 后退与前进: 历史记录。用例：history.goback();

7.cookie的增删改查。






------------------------
第6章 js事件处理 Event/

回调函数。


1.事件绑定 

事件、事件绑定、事件冒泡、事件捕获(https://segmentfault.com/a/1190000004463384)
(1).事件都是加到具体对象上
	oDiv.onclick=function(){}
(2) onload事件，onunload事件
<body onload='alert("hello");' onbeforeunload='alert("bye bye");'>


(3) 安全的绑定
onload 事件会被后来者覆盖，怎么在一个对象上同时绑定多个同名事件呢？





2.鼠标事件  
	onclick
	onmouseover:鼠标移进
	onmouseout:移出操作


3.键盘事件
	onkeyup


4.表单事件
	onsubmit:表单提交之前，可做数据验证
	js表单验证
	1) 常规的是判断并弹出提示；
	2) 毕向东Html、CSS、JavaScript视频教程
		[1]保留 java怎么接收form的消息
		[2] 给form加label的好处：【不大实用】
			1.accessKey指定快捷键，需要配合alt键使用；
			2.label的for属性指向input的id属性，可以使input快速获取焦点

	操作文件
	File API



5.自定义事件


6.主动触发事件






------------------------
第7章 js数据交互-ajax/json/Promise
1.更有好的方式是避免弹窗，在末尾显示<span>红色提示文字</span>；
		获得obj，在innerHTML中加入文字提示；
2.ajax

XHR、json、




------------------------
第8章 Canvas 与 SVG





------------------------
第9章 js 定时器与动画

定时器、动画（链式运动、跳跃运动、）

1.产生动画的2个函数
setTimeOut('', 1000)
setInterval('', 2000)




2.时间
	var today=new Date();
	//Tue Nov 24 2015 16:41:42 GMT+0800 (中国标准时间)
	//获取小时
	var h=today.getHours();//16



3.学习方法：看API、看书、做练习

趣味代码：
	- 黑客帝国
	- 鼠标跟随
	- 找相同图片
	- 漂浮的云
	- 打字效果
	- 石头剪刀布
	- 星球大战

读书进步快：读英文书
	- 看目录
	- 看例子代码

推荐的书
	- javascript programmer's reference
	- professional javascript for web developers







------------------------
第9章 jQuery

- 选择器
- 操作DOM
	事件
	动画
	AJAX
	扩展


------------------------
第10章 错误处理 

错误传播
异步错误处理


------------------------
第11章 underscore

Collection
Arrays
Functions
Objects
Chaining




------------------------
第12章 nodeJS/


------------------------
第13章 ES6/




------------------------
第14章 设计模式/








------------------------
第n章 综合练习：usefull/

要做成简单的效果，满足要求并简练是最好的效果。

-[1]ok 下拉换头像usefull->userPic.html
-[2] 2/3级联动列表：onchange事件
-[3] 侧边滑动式菜单:onouseover滑动出来
-[4] 抽屉式菜单
-[5]ok 日历效果。插件式，点击获取oop_part->calender->calender.html
	5.1梅花雨日历控件：demo失败，不能用。
-[6] 模拟alert的弹出层：httphttp://www.cnblogs.com/NNUF/archive/2012/04/26/2471120.html

延迟加载的原理：
http://www.daxueit.com/article/3777.html
http://www.cnblogs.com/NNUF/archive/2012/06/25/2561570.html

-[7] 判断：是否为数字，是否为字符，是否为邮箱
-[8] 树结构 treeview.js，接口简单，写着困难。








0.问题：
	-[1] 怎么处理空格不能弹出alert？alertAfterSpace.html
		贴吧：http://tieba.baidu.com/p/4178119582
