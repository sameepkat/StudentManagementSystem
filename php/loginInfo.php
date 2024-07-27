<?php
session_start();
include('dbconnection.php');

header('Content-Type: application/json'); 
$response = array();

if (isset($_GET['username']) && isset($_GET['password'])) {
    $username = $_GET['username'];
    $password = $_GET['password'];

    $query = "SELECT * FROM adminLogin WHERE username='{$username}' AND password='{$password}';";
    $result = mysqli_query($connection, $query);

    if (mysqli_num_rows($result) > 0) {
        $_SESSION['loggedIn'] = true;
        $_SESSION['username'] = $username;
        $data = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }
        $response['data'] = $data;
    } else {
        $query = "SELECT * FROM studentLogin WHERE soeId='{$username}' AND Password='{$password}';";
        $result = mysqli_query($connection, $query);

        if (mysqli_num_rows($result) > 0) {
            $data = array();
            while ($row = mysqli_fetch_assoc($result)) {
                $data[] = $row;
            }
            $response['data'] = $data;
        } else {
            $response['data'] = array(); // Return an empty array if no matches
        }
    }
} else {
    $response['error'] = 'Invalid parameters';
}

echo json_encode($response);
mysqli_close($connection);
?>
