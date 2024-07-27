<?php
session_start();
include('dbconnection.php');

if($_SESSION['loggedIn']==true){
    if (isset($_GET['table'])) {
        $table = $_GET['table'] ;
        if ($table === 'studentInfo' || $table === 'FinalResult1stSem' || $table==='InternalResult1stSem') {
            $query = "SELECT * FROM {$table}";
            $result = mysqli_query($connection, $query);
            $row = mysqli_num_rows($result);
            if ($row > 0) {
                $data = array();
                while ($row = mysqli_fetch_assoc($result)) {
                    $data[] = $row;
                }
                echo json_encode($data);
            } else {
                echo json_encode(array());
            }
        } else {
            echo json_encode(array("error" => "Invalid table"));
        }
    } else {
        echo json_encode(array("error" => "No table specified"));
    }

   
}
else{
    header("Location: ../login/login.html");
}
mysqli_close($connection);