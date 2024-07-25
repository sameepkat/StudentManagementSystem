<?php
include('dbconnection.php');

// $query = "SELECT * FROM `1st sem final`";
// if (isset($_GET['table'])) {
$table = $_GET['table'];
if ($table === 'studentInfo') {
    //Store datas
    $RollNo = $_GET['roll'];
    $Name = $_GET['name'];
    $ExamRollNo = $_GET['rollno'];
    $PuRegNo = $_GET['regno'];
    $Email = $_GET['email'];
    $Address = $_GET['address'];
    $PhNo = $_GET['phone'];
    $Sex = $_GET['sex'];

    $query = "INSERT INTO `studentInfo`(Name,ExamRollNo,PuRegNo,Email,Address,PhNo,Sex) VALUES('{$Name}','{$ExamRollNo}','{$PuRegNo}','{$Email}','{$Address}','{$PhNo}','{$Sex}');";
    echo $query;
    $result = mysqli_query($connection, $query);
    echo $result;

}
// }

mysqli_close($connection);
