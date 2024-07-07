<?php
include ('dbconnection.php');
$adminDatabase = 'admin';
if($_GET['table']){
    $table = $_GET['table'];
    $username = $_GET['username'];
    $password = $_GET['password'];
    if ($table === $adminDatabase){
        $query = "SELECT * FROM {$adminDatabase} WHERE username='{$username}' AND password='{$password}'";
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
            echo "So empty";
        }
    } else {
        echo json_encode(array("error" => "Invalid table"));
    }
} else {
    echo json_encode(array("error" => "No table specified"));
    echo "<script>console.log('database and table are not the same');
        </script>";
    echo "Some kind of error";
    echo `{$username}: {$password}`;
}

mysqli_close($connection);
