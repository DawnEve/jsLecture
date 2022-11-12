<?php
header('Content-Type: text/html; charset=UTF-8');
//设置时区
date_default_timezone_set('PRC');
/*
version:v0.0.1
auther:jimmyMall at live dot com 
*/

function debug($str){
	echo '<pre>';
	//var_dump($str);
	print_r($str);
	echo '</pre>';
}


#连接数据库
$conn = mysql_connect("y.biomooc.com:7070","root","123456") or die('连接错误：'.mysql_error());
//设置客户端和连接字符集
mysql_query('set names utf8');
#echo "连接成功";

//选定数据库
mysql_select_db('wang');

$sql="select msg_url,msg_date,msg_title,msg_content from msg_English;";

$rs=mysql_query($sql,$conn);
$rows=array();
while($row=mysql_fetch_assoc($rs)){
	$rows[]=$row;
}
#return $rows;
debug($rows);
// some code