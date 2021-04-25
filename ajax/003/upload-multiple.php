<?php

#$data=file_get_contents('php://input') ;

#file_put_contents("dustbin/a.txt",  $_FILES["file"]["tmp_name"] );
file_put_contents("dustbin/a.txt",  print_r($_FILES, true) );

//逐个上传
for($i=0; $i<count($_FILES); $i++){
	move_uploaded_file($_FILES["file".$i]["tmp_name"],
		  "dustbin/" . $_FILES["file".$i]["name"]);
	
}

echo "Stored in: " . "dustbin/" . $_FILES["file0"]["name"];

echo "<pre>\n";
var_dump($_FILES);