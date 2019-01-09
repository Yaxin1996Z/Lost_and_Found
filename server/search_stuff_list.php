<?php       
  $con=mysqli_connect("localhost","root","","Lost_and_Found") or die('数据库连接失败！<br>错误原因：'.mysqli_error($con));
  mysqli_set_charset($con,"utf8");//设置字符集，根据数据库的字符集定，utf8/gbk

  $table=$_GET["table"];
  $stuff_type=$_GET["stuff_type"];
if($stuff_type<9){
  if($table){
    $sql = "SELECT * FROM `stuff_lost` where state=0 and type=".$stuff_type;
    $result = mysqli_query($con,$sql) or die('失物启示查询失败！</br>错误原因：'.mysqli_error($con));

    if ($result){
      $data = array();
      while ($row = mysqli_fetch_array($result)) 
      {

          // $obj= '{"type":"'.$row['type'].'","name":"'.$row['name'].'","date":"'.$row['date'].'","position":"'.$row['position'].'","description":"'.$row['description'].'"}';
          array_push($data,array(
            'type' => $row['type'],
            'name' => $row['name'],
            'date' => $row['date'],
            'position' => $row['position'],
            'description' => $row['description']
             ));
      }
  echo json_encode($data);
    }else{
      echo "fail to select";
    }
  }else{
   $sql = "SELECT * FROM `stuff_found` where state=0 and type=".$stuff_type;
    $result = mysqli_query($con,$sql) or die('招领启示查询失败！</br>错误原因：'.mysqli_error($con));

    if ($result){
      $data = array();
      while ($row = mysqli_fetch_array($result)) 
      {

          // $obj= '{"type":"'.$row['type'].'","name":"'.$row['name'].'","date":"'.$row['date'].'","position":"'.$row['position'].'","description":"'.$row['description'].'"}';
          array_push($data,array(
            'type' => $row['type'],
            'name' => $row['name'],
            'date' => $row['date'],
            'position' => $row['position'],
            'description' => $row['description']
             ));
      }
  echo json_encode($data);
    }else{
      echo "fail to select";
    }
  }
}else{
  if($table){
  $sql = "SELECT * FROM `stuff_lost` where state=0";
  $result = mysqli_query($con,$sql) or die('失物启示查询失败！</br>错误原因：'.mysqli_error($con));

  if ($result){
    $data = array();
    while ($row = mysqli_fetch_array($result)) 
    {

        // $obj= '{"type":"'.$row['type'].'","name":"'.$row['name'].'","date":"'.$row['date'].'","position":"'.$row['position'].'","description":"'.$row['description'].'"}';
        array_push($data,array(
          'type' => $row['type'],
          'name' => $row['name'],
          'date' => $row['date'],
          'position' => $row['position'],
          'description' => $row['description']
           ));
    }
echo json_encode($data);
  }else{
    echo "fail to select";
  }
}else{
 $sql = "SELECT * FROM `stuff_found` where state=0";
  $result = mysqli_query($con,$sql) or die('招领启示查询失败！</br>错误原因：'.mysqli_error($con));

  if ($result){
    $data = array();
    while ($row = mysqli_fetch_array($result)) 
    {

        // $obj= '{"type":"'.$row['type'].'","name":"'.$row['name'].'","date":"'.$row['date'].'","position":"'.$row['position'].'","description":"'.$row['description'].'"}';
        array_push($data,array(
          'type' => $row['type'],
          'name' => $row['name'],
          'date' => $row['date'],
          'position' => $row['position'],
          'description' => $row['description']
           ));
    }
echo json_encode($data);
  }else{
    echo "fail to select";
  }
}
}