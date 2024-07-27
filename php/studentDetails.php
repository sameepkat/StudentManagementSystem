<?php
session_start();
include('dbconnection.php');

// $query = "SELECT * FROM `1st sem final`";
// if (isset($_GET['table'])) {
if($_SESSION['loggedIn']==true){
    $table = $_GET['table'];
    if ($table === 'studentInfo') {
        //Store datas
        $method = $_GET['method'];
        if ($method === "post") {
            $RollNo = $_GET['roll'];
            $Name = $_GET['name'];
            $ExamRollNo = $_GET['examrollno'];
            $PuRegNo = $_GET['regno'];
            $Email = !empty($_GET['email']) ? "'{$_GET['email']}'" : 'null';
            $PhNo = !empty($_GET['phone']) ?  "'{$_GET['phone']}'" : 'null';
            $Sex = !empty($_GET['sex']) ?     "'{$_GET['sex']}'" : 'null';
            echo "This was an post<br>";
            $query = "INSERT INTO `studentInfo`(RollNo, Name,ExamRollNo,PuRegNo,Email,PhNo,Sex) VALUES('{$RollNo}','{$Name}','{$ExamRollNo}','{$PuRegNo}',{$Email},{$PhNo},{$Sex});";
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
        if($method === "delete")
        {
            echo "Deleting <br>";
            $RollNo = $_GET['roll'];
            $Name = $_GET['name'];
            echo "<br>
            Roll: {$RollNo}<br>
            Name: {$Name}<br>
            ";
            $query = "DELETE FROM `studentInfo` where RollNo={$RollNo} AND Name='{$Name}';";
        }
        echo $query . "<br>";
        $result = mysqli_query($connection, $query);
        echo $result;
    }
}
else{
    header("Location: ../login/login.html");
}

mysqli_close($connection);
