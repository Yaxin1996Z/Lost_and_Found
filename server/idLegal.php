<?php       
  $con=mysqli_connect("localhost","root","","Lost_and_Found") or die('数据库连接失败！</br>错误原因：'.mysqli_error($con));
  mysqli_set_charset($con,"utf8");//设置字符集，根据数据库的字符集定，utf8/gbk

  $userId=$_GET["userId"];
  $sql="select * from `userinfo` where userId='".$userId."'";
  $result=mysqli_query($con,$sql) or die('用户id查询失败！</br>错误原因：'.mysqli_error($con));
  if(mysql_fetch_array($result)){
  	echo true;
  }else{
  	echo false;
  }
