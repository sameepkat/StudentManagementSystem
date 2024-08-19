<?php
session_start();
include('dbconnection.php');

header('Content-Type: application/json'); 
$response = array();
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
                echo json_encode("Bad Request. Contact Developer");
           }
        }
else{
    header("");
}
mysqli_close($connection);
