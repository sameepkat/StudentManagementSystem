<?php
include('dbconnection.php');

// $query = "SELECT * FROM `1st sem final`";
// if (isset($_GET['table'])) {
$table = $_GET['table'];
if ($table === 'studentInfo') {
    //Store datas
    $method = $_GET['method'];
    echo $method;
    if ($method === "post") {
        $RollNo = $_GET['roll'];
        $Name = $_GET['name'];
        $ExamRollNo = $_GET['examrollno'];
        $PuRegNo = $_GET['regno'];
        $Email = $_GET['email'];
        $PhNo = $_GET['phone'];
        $Sex = $_GET['sex'];
        echo "This was an post<br>";
        $query = "INSERT INTO `studentInfo`(RollNo, Name,ExamRollNo,PuRegNo,Email,PhNo,Sex) VALUES('{$RollNo}','{$Name}','{$ExamRollNo}','{$PuRegNo}','{$Email}','{$PhNo}','{$Sex}');";
    }
    if ($method === "put") {
    echo "Putting";
        $RollNo = $_GET['roll'];
        $OldRollNo = $_GET['oldroll'];
        $Name = $_GET['name'];
        $ExamRollNo = $_GET['examrollno'];
        $PuRegNo = $_GET['regno'];
        $Email = !empty($_GET['email']) ? "'{$_GET['email']}'" : 'null';
        $PhNo = !empty($_GET['phone']) ?  "'{$_GET['phone']}'" : 'null';
        $Sex = !empty($_GET['sex']) ?     "'{$_GET['sex']}'" : 'null';
        echo "<br>
        Email: {$Email}<br>
        PhNo: {$PhNo}<br>
        Sex: {$Sex}<br>
        ";
        $query = "UPDATE `studentInfo` SET RollNo='{$RollNo}', Name='{$Name}',ExamRollNo='{$ExamRollNo}',PuRegNo='{$PuRegNo}', Email = {$Email}, PhNo={$PhNo}, Sex={$Sex} WHERE RollNo='{$OldRollNo}';";
        echo "This was an edit <br>";
    }
    echo $query . "<br>";
    $result = mysqli_query($connection, $query);
    echo $result;
}
// }

mysqli_close($connection);
