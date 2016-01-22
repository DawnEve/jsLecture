//控制台输出函数
function n(s){
	if(console){
		console.log(s)
	}else{
		alert(s);
	}
}

//这个debug是否可用？会终止函数吗？貌似不会
function debug(s){
	n(s);
	return;
}