// global parameters here
window.jslecture={
}; 

/* important cmd;
// window.addEventListener("load", fun, false);

*/


// ============== tool box ==============

function $(s){
	return document.getElementById(s);
}

/** 返回创建的dom元素
* 只有第一个参数是必须的。
* 其余2个参数可选。
*/
function createElement(tag, json, innerHTML){
	var json=json||{};
	var dom=document.createElement(tag);
	
	if(json!=undefined){
		for(var key in json){
			dom.setAttribute(key,json[key]);
		}
	}
	
	if(innerHTML!=undefined){
		dom.innerHTML=innerHTML;
	}
	return dom;
}


//给obj增加事件的自定义函数：兼容IE/chrome/ff
function addEvent(obj, ev, fn){
	if(obj.addEventListener){
		//ff, chrome: addEventListener
		obj.addEventListener(ev, fn, false);
	}else{
		//IE:attachEvent
		obj.attachEvent('on'+ev,fn);
	}
}

/*
example：
addEvent(oBtn,'click',function(){
		alert('c');
	});
*/







// ==============事件处理函数 及 事件注册 ==============

//生成右侧菜单
var createRightMenu=function(){
	//0.创建一个侧边栏 虚拟dom
	var oBox=document.createElement("div");
	oBox.setAttribute('id', "rightMenu");

	//1.创建关闭按钮
	/* html: 
	<div id="cli_title" class="title"> 
		<b id="cli_on">-</b>
		Contents 
	</div>
	*/
	var oDivTitle=createElement("div", {
		"id":"cli_title",
		"class": "title",
	});
	//插入head行
	oDivTitle.appendChild(createElement("b", {"id":"cli_on"}, "-"));
	oDivTitle.appendChild(document.createTextNode("Contents"));
	oBox.appendChild(oDivTitle);
	
	
	//2. 生成a标签
	var arrHead=document.querySelectorAll(["h1", "h2", "h3", "h4", "h5", "h6"]);
	
	var oUl=document.createElement("ul");
	for(var i=1; i<arrHead.length; i++){
		//(1) 菜单链接
		var oH=arrHead[i];
		var text=oH.textContent;
		var oLi=document.createElement("li");
		var oA=document.createElement("a");
		var oSpan=document.createElement("span");
		//最多40个字
		oSpan.innerHTML=text.length>40? text.substr(0,38)+"...":text;
		oA.appendChild( oSpan ); 
		oA.setAttribute("href", "#"+i);
		//(1.2)添加事件：单击则刷新当前高亮
		oA.onclick=highlight_curent_munu;
		
		oLi.appendChild(oA);
		oUl.appendChild( oLi );
		
		//(2)在原文h2等标题后插入a锚点，使用 my-data="anchor" 进行区分
		var oA2=document.createElement("a");
		oA2.setAttribute("name", i)
		oA2.setAttribute("my-data", "anchor");
		oH.parentNode.insertBefore(oA2, oH);
	}
	oBox.appendChild(oUl);

	//3.插入文档流
	document.body.appendChild(oBox);
}



// 窗口滚动时，高亮右侧当前菜单
function highlight_curent_munu(){
	//1.scrollTop就是触发滚轮事件时滚轮的高度
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	
	//2.右侧目录标题 ele
	var oMenu=$('rightMenu');
	var aSpan=oMenu.getElementsByTagName("span");
	
	//3.正文标题 ele
	var aA= document.querySelectorAll("a[my-data]");
	
	//4.所有ele去样式
	for(var j=0;j<aSpan.length;j++){
		aSpan[j].parentElement.setAttribute("class","");
	}
	//5.遍历正文锚点
	var i=0;
	for(; i<aA.length; i++){
		if(aA[i].offsetTop>=scrollTop){
			//6.当前A 标签加样式:当前应该是 浏览器顶端所在的head编号-1
			aSpan[i==0? 0: i-1].parentElement.setAttribute("class", "cur");
			break;
		}else if( (i==aA.length-1) && (aA[i].offsetTop < scrollTop + 10) ){
			//如果到最后一个header后了，则高亮它
			aSpan[i].parentElement.setAttribute("class", "cur");
			break;
		}
	}
}


// 注册事件: 关于右边的菜单
window.addEventListener("load", function(){
	//1.创建右侧菜单
	createRightMenu();

	//2.绑定事件: 单击+-号，右侧菜单放大和缩小
	addEvent($("cli_on"), "click", rightMenu_toggle);
	//加载后，右侧菜单自动收缩
	$('cli_on').click();

	//3.注册事件: 滚轮时，高亮显示当前菜单
	//addEvent(window, "scroll", highlight_curent_munu);
	window.addEventListener("scroll", highlight_curent_munu, false);
	window.scrollBy(1, 1); //主动触发滚动，否则没有高亮
	
}, false);





//右侧菜单放大与缩小
window.jslecture.flag=true; //true 右侧菜单 打开状态
var rightMenu_toggle=function(){
	var oMenu=$("rightMenu");
	var flag=window.jslecture.flag;
	if(flag){
		window.jslecture.height=getComputedStyle(oMenu)['height'];
	}
	//set
	oMenu.style.right = flag?'-270px':0;
	oMenu.style.height = flag?'30px':window.jslecture.height;
	this.innerHTML=flag?"+":"-";
	//
	window.jslecture.flag = !flag;
} 
