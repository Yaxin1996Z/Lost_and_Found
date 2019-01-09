<?php       
  $con=mysqli_connect("localhost","root","","Lost_and_Found") or die('数据库连接失败！<br>错误原因：'.mysqli_error($con));
  mysqli_set_charset($con,"utf8");//设置字符集，根据数据库的字符集定，utf8/gbk

  $userId=$_GET["userId"];

  $sql = "SELECT * FROM `userinfo` where userId='".$userId."'";
  $result = mysqli_query($con,$sql) or die('失物启示查询失败！</br>错误原因：'.mysqli_error($con));

  if ($result){
    $data = array();
    while ($row = mysqli_fetch_array($result)) 
    {

        // $obj= '{"type":"'.$row['type'].'","name":"'.$row['name'].'","date":"'.$row['date'].'","position":"'.$row['position'].'","description":"'.$row['description'].'"}';
        array_push($data,array(
          'userName' => $row['userName'],
          'phoneNum' => $row['phoneNum'],
          'QQ' => $row['QQ']
           ));
    }
echo json_encode($data);
  }else{
    echo "fail to select";
  }