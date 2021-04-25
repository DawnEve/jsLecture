<?php
$data=$_POST;
#$data=file_get_contents('php://input') ;

file_put_contents("dustbin/a.txt",  $_FILES["file"]["tmp_name"] );

move_uploaded_file($_FILES["file"]["tmp_name"],
      "dustbin/" . $_FILES["file"]["name"]);

echo "Stored in: " . "dustbin/" . $_FILES["file"]["name"];

echo "<pre>";
var_dump($data);