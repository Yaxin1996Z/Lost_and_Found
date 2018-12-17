<?php       
  $con=mysqli_connect("localhost","root","","Lost_and_Found") or die('数据库连接失败！<br>错误原因：'.mysqli_error($con));
  mysqli_set_charset($con,"utf8");//设置字符集，根据数据库的字符集定，utf8/gbk
  
  $userId=$_GET["userId"];
  $type=$_GET["type"];
  $name=$_GET["name"];
  $date=$_GET["date"];
  $position=$_GET["position"];
  $description=$_GET["description"];
  $table=$_GET["table"];
if($table){
  $sql = "INSERT INTO `stuff_lost`(`userId`, `type`, `name`, `date`, `position`, `description`) VALUES ('".$userId."',".$type.",'".$name."','".$date."','".$position."','".$description."')";
  $result = mysqli_query($con,$sql) or die('失物启示插入失败！</br>错误原因：'.mysqli_error($con));

  if ($result){
    $sql = "SELECT max(id) FROM stuff_lost";
    $result = mysqli_query($con,$sql) or die('查询失物启示id失败！</br>错误原因：'.mysqli_error($con));
    echo $result->fetch_assoc()["max(id)"];
  }else{
    echo "fail to insert";
  }
}else{
  $sql = "INSERT INTO `stuff_found'(`userId`, `type`, `name`, `date`, `position`, `description`) VALUES ('".$userId."',".$type.",'".$name."','".$date."','".$position."','".$description."')";
  $result = mysqli_query($con,$sql) or die('招领启示插入失败！</br>错误原因：'.mysqli_error($con));

  if ($result){
    $sql = "SELECT max(id) FROM stuff_found";
    $result = mysqli_query($con,$sql) or die('查询招领启示id失败！</br>错误原因：'.mysqli_error($con));
    echo $result->fetch_assoc()["max(id)"];
  }else{
    echo "fail to insert";
  }
}