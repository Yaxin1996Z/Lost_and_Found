<?php       
  $con=mysqli_connect("localhost","root","","Lost_and_Found") or die('数据库连接失败！<br>错误原因：'.mysqli_error($con));
  mysqli_set_charset($con,"utf8");//设置字符集，根据数据库的字符集定，utf8/gbk

  $table=$_GET["table"];
  $id=$_GET["id"];

if($table){
  // $sql = "DELETE FROM `stuff_lost` where id = ".$id;
  $sql = "update `stuff_lost` set state=1 where id = ".$id;
  $result = mysqli_query($con,$sql) or die('失物启示删除失败！</br>错误原因：'.mysqli_error($con));
}else{
  // $sql = "SELECT * FROM `stuff_found` where id = ".$id;
  $sql = "update `stuff_found` set state=1 where id = ".$id;
  $result = mysqli_query($con,$sql) or die('招领启示删除失败！</br>错误原因：'.mysqli_error($con));
}