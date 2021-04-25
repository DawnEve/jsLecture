<?php
//响应post请求，返回字符串
header('Content-Type:application/json; charset=utf-8'); #返回json

if(0){
	// 走这里啥都没有
	$data=file_get_contents('php://input') ; //获取非表单数据;
	# $data = (array)json_decode( $data );// 并转为json对象
	$data = json_decode( $data, true);//这两行等价
	/*
	json_decode returns an instance of stdClass, which you can't access like you would access an array. 
	json_decode does have the possibility to return an array, by passing true as a second parameter.
	*/
}else{
	// 走这里才能拿到内容
	$data=$_POST;
}

$data=array_merge($data, $_GET); //合并数组，把url传递的值也获取了

$data["length"]=count($data); //添加新键值对

//记录到文件
file_put_contents("dustbin/post.txt", json_encode($data) );

//输出
echo json_encode($data);