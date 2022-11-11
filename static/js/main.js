//window.addEventListener("load", fun, false)

function $(s){
	return document.getElementById(s);
}



// add menu on right;
window.addEventListener("load", function(){
	// 生成侧面标签
	var arrHead=document.querySelectorAll(["h1", "h2", "h3", "h4", "h5", "h6"]);
	
	// 创建一个侧边栏
	var oBox=document.createElement("div");
	var oUl=document.createElement("ul");
	oBox.setAttribute('id', "rightMenu");
	for(var i=1; i<arrHead.length; i++){
		var oH=arrHead[i];
		var text=oH.textContent;
		var oLi=document.createElement("li");
		var oA=document.createElement("a");
		var oSpan=document.createElement("span");
		//最多40个字
		oSpan.innerHTML=text.length>40? text.substr(0,38)+"...":text;
		oA.appendChild( oSpan ); 
		oA.setAttribute("href", "#"+i);
		
		oLi.appendChild(oA);
		oUl.appendChild( oLi );
		
		//在原文h2等标题后插入a锚点，使用 my-data="anchor" 进行区分
		var oA2=document.createElement("a");
		oA2.setAttribute("name", i)
		oA2.setAttribute("my-data", "anchor");
		oH.parentNode.insertBefore(oA2, oH);
	}
	//插入文档
	oBox.appendChild(oUl);
	document.body.appendChild(oBox);
}, false);



// 窗口滚动时，高亮右侧当前菜单
window.addEventListener("scroll", function(){
	//scrollTop就是触发滚轮事件时滚轮的高度
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	
	//右侧目录 内容
	var oMenu=$('rightMenu');
	// 如果右侧目录没搞好，则可能获取到空 //bug //todo
	//暂时的方法是，如果为空，则直接返回。
	if(!oMenu){
		console.log("右侧目录还没有生成!")
		return false;
	}
	var aSpan=oMenu.getElementsByTagName("span");
	
	//正文 内容
	var aA= document.querySelectorAll("a[my-data]");
	
	//对正文的锚点进行遍历
	var i=0;
	for(; i<aA.length; i++){
		if(aA[i].offsetTop>=scrollTop){
			break;
		}
	}
	
	//都去样式
	for(var j=0;j<aSpan.length;j++){
		aSpan[j].parentElement.setAttribute("class","");
	}
	//当前加样式
	var oA=aSpan[i].parentElement
	oA.setAttribute("class","cur")
	
}, false);


