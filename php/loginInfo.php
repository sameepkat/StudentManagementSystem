<?php
session_start();

include ('dbconnection.php');
if($_SERVER['REQUEST_METHOD']=='GET'){
    $username = $_GET['username'];
    $password = $_GET['password'];
    
    $query = "SELECT * FROM adminLogin WHERE username='{$username}' AND password='{$password}';";
    $result = mysqli_query($connection, $query);
    if (mysqli_num_rows($result) > 0) {
        $_SESSION['loggedIn']=true;
        $_SESSION['username']=$username;
        $data = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }
        echo json_encode($data);
    }
    else {
        $query = "SELECT * FROM studentLogin WHERE soeId='{$username}' AND Password='{$password}';";
        $result = mysqli_query($connection, $query);
        if(mysqli_num_rows($result)>0){
            $data = array();
            while($row = mysqli_fetch_assoc($result)){
                $data[] = $row;
            }
            echo json_encode($data);
        }
        else{
            echo json_encode(array());
            echo "So empty";
        }
        
    }
} else {
    echo json_encode(array("error" => "No table specified"));
    echo "<script>console.log('database and table are not the same');
        </script>";
    echo "Some kind of error";
    echo `{$username}: {$password}`;
}

mysqli_close($connection);
