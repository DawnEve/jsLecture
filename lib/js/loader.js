
//js加载器AMD以及CMD
//这个细节很多，实现起来难度略大
//1.加载js文件到当前文档流【原则1：id即文件名】

var loader=function(aJS){
	//定义基本目录
	var baseUrl=this.url || '../js/';
	//获取当前脚本dom，该文档至少存在一个script标签
	var pscript=document.getElementsByTagName('script')[0];
	//把js文件逐个加载到当前文档
	for(var i=0;i<aJS.length;i++){
		var s=document.createElement('script');
		s.type="text/javascript";
		s.src=baseUrl + aJS[i] +'.js';
		s.id=aJS[i];
		/*var scriptDom=createElement('script',{
				'type':"text/javascript",
				'src': baseUrl + aJS[i] +'.js',
				'id':aJS[i],
		});*/
		pscript.parentElement.appendChild(s);
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
