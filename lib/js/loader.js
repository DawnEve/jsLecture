//控制台输出函数
function n(s){console.log(s)}


//js加载器AMD以及CMD
//这个细节很多，实现起来难度略大
//1.加载js文件到当前文档流【原则1：id即文件名】

var loader=function(aJS){
	//定义基本目录
	var baseUrl='../public/js/';
	//获取当前脚本dom，该文档至少存在一个script标签
	var thisDom=document.getElementsByTagName('script')[0];
	//把js文件逐个加载到当前文档
	for(var i=0;i<aJS.length;i++){
		var scriptDom=createElement('script',{
				'type':"text/javascript",
				'src': baseUrl + aJS[i] +'.js',
				'id':aJS[i],
		});
		thisDom.parentElement.appendChild(scriptDom);
	}
}
//测试 loader(['url','hook','a']);
/*
浏览器即时创造出一个<script>标签，然后"异步"读取Javascript文件。
这样不会造成页面堵塞。
但会造成另外一个问题：这样加载的Javascript文件，不在原始的DOM结构之中，
因此在DOM-ready（DOMContentLoaded）事件和window.onload事件中指定的回调函数对它无效。

根据我在chrome下的测试，window.onload是在loadScript把js加入dom后才触发的。所以这不是问题。
*/



/**
	根据json信息建立dom元素
	@para string 要建立的标签
	@para json object 属性键值对
	@para string or dom 元素内部innerHTML
	return dom元素
*/
function createElement(tag,json,innerHTML){
	var innerHTML=innerHTML||'';
	//新建对象
	var dom=document.createElement(tag);
	//添加属性
	for(var key in json){
		dom.setAttribute(key,json[key]);
	}
	//塞入内容
	if(innerHTML!=''){
		dom.innerHTML=innerHTML;
	}
	//返回
	return dom;
}
//测试 getElement('div',{'class':'red', 'id':'test2', },'123');

