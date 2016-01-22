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