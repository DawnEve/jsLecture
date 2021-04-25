<?php
$name=$_GET["name"];
#echo "From php: length of $name is ".strlen($name);
$_GET["length"]=strlen($name);
echo json_encode($_GET);