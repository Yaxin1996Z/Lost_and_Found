<?php       
  $con=mysqli_connect("localhost","root","","Lost_and_Found") or die('数据库连接失败！<br>错误原因：'.mysqli_error($con));
  mysqli_set_charset($con,"utf8");//设置字符集，根据数据库的字符集定，utf8/gbk

  $table=$_GET["table"];
if($table){
  $sql = "SELECT * FROM `stuff_lost`";
  $result = mysqli_query($con,$sql) or die('失物启示查询失败！</br>错误原因：'.mysqli_error($con));

  if ($result){
    $data = array();
    while ($row = mysql_fetch_array($result)) 
    {
        $data[] = $row;
    }
    echo $data;
  }else{
    echo "fail to select";
  }
}else{
 
}