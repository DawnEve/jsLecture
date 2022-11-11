//w.addEventListener("load", fun, false)

// add menu on right;
window.addEventListener("load", function(){
	// 生成侧面标签
	var arrHead=document.querySelectorAll(["h1", "h2", "h3", "h4", "h5", "h6"]);
	
	// 创建一个侧边栏
	var oBox=document.createElement("div");
	var oUl=document.createElement("ul");
	oBox.setAttribute('class', "titleList");
	for(var i=1; i<arrHead.length; i++){
		var oH=arrHead[i];
		var text=oH.textContent;
		var oLi=document.createElement("li");
		var oA=document.createElement("a");
		//最多40个字
		oA.innerHTML= text.length>40? text.substr(0,38)+"...":text;
		oA.setAttribute("href", "#"+i);
		
		oLi.appendChild(oA);
		oUl.appendChild( oLi );
		
		//在原文插入链接
		var oA2=document.createElement("a");
		oA2.setAttribute("name", i)
		oH.parentNode.insertBefore(oA2, oH);
	}
	//插入文档
	oBox.appendChild(oUl);
	document.body.appendChild(oBox);
}, false);