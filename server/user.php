<?php       
  $con=mysqli_connect("localhost","root","","Lost_and_Found") or die('数据库连接失败！</br>错误原因：'.mysqli_error($con));
  mysqli_set_charset($con,"utf8");//设置字符集，根据数据库的字符集定，utf8/gbk

  $todo=$_GET["todo"];
  $userId=$_GET["userId"];
  $name=$_GET["name"];
  $phoneNum=$_GET["phoneNum"];
  $QQ=$_GET["QQ"];

if($todo=="insert"){
	$sql1="INSERT INTO userinfo( userId, userName, phoneNum, QQ) VALUES ('".$userId."','".$name."','".$phoneNum."','".$QQ."')";
	$result=mysqli_query($con,$sql1) or die('用户信息插入失败！</br>错误原因：'.mysqli_error($con));
  echo 'insert sucess';
}
  else if($todo=="update"){
  	$sql2="UPDATE `userinfo` SET userName='".$name."',phoneNum='".$phoneNum."',QQ='".$QQ."' WHERE userId='".$userId."';";
    $result=mysqli_query($con,$sql2) or die('用户信息更新失败！</br>错误原因：'.mysqli_error($con));
    echo 'update sucess';
  }