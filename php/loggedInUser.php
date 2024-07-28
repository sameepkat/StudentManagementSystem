<?php
header('Content-Type: application/json');
session_start();
$usernameToName = $_SESSION['username'];

include('dbconnection.php');
$query = "SELECT * FROM adminLogin WHERE username='{$usernameToName}';";
    $result = mysqli_query($connection, $query);

    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $data = $row;
        }
    echo json_encode($data['name']);

    } else {
        $query = "SELECT * FROM studentLogin WHERE username='{$usernameToName}';";
        $result = mysqli_query($connection, $query);

        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $data = $row;
            }
        } else {
            $data = 'empty';
        }
    echo json_encode($data['Name']);
    }

    mysqli_close($connection);