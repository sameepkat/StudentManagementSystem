<?php
$servername = "localhost";
$user = "root";
$password = "";
$database = "first_sem_final";

//Create connection
$connection = mysqli_connect($servername, $user, $password, $database);
if(!$connection)
{
  die( "Connection Fail".mysqli_connect_errno());
}
