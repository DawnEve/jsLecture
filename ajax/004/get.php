<?php
//test get for python
#header("content-type:text/html;charset=utf-8"); #返回字符串
header('Content-Type:application/json; charset=utf-8'); #返回json

$name=  $_GET["name"];//可以输出form中标签的属性值   其中参数的name
$pass= $_GET["pass"];
## http://10.21.127.192/test/get.php?name=Jim&age=200

$_GET["server"]="1232445";//新增数据

//记录到文件
file_put_contents("../dustbin/get.txt", $name." ".$pass);

if($name=="vue"){
    sleep(1);//测试是否异步
}

//返回json
echo json_encode($_GET);
