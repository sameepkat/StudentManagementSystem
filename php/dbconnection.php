<?php
$servername = "localhost";
$user = "root";
$password = "";
$database = "Software2080";

//Create connection
$connection = mysqli_connect($servername, $user, $password, $database);
if(!$connection)
{
  echo "Did not connect <br>";
  die( "Connection Fail".mysqli_connect_errno());
}