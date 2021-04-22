<?php

#header("content-type:text/html;charset=utf-8"); #返回字符串
#header('Content-Type:application/json; charset=utf-8'); #返回json

$data = (array)json_decode($HTTP_RAW_POST_DATA);
#$data = file_get_contents('php://input') ; //获取非表单数据;

file_put_contents("../dustbin/post1.txt", print_r($data, true));//写入文件

$_POST=$data;
$name=  $_POST["name"];//可以输出form中标签的属性值   其中参数的name
$pass= $_POST["pass"];
## http://10.21.127.192/test/get.php?name=Jim&age=200

$_POST["server"]="1232445";//新增数据

//记录到文件
file_put_contents("../dustbin/post2.txt", $name." ".$pass);

if($name=="vue"){
    sleep(1);//测试是否异步
}

//返回json
echo json_encode($_POST);
