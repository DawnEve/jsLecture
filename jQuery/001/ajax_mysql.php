<?php
#1.由关键词，从数据库检索出包含该单词的文章，
#2.再用php检索出包含该单词的句子，高亮显示
$word = isset($_POST['word']) ? htmlspecialchars($_POST['word']) : '';
echo 'key word: ' . $word;


#连接数据库
include("ajax_mysql-lib.php");
