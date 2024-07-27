<?php
$servername = "localhost";
$user = "SMSadmin";
$password = "SMSadmin@1";
$database = "Software2080";

//Create connection
$connection = mysqli_connect($servername, $user, $password, $database);
if(!$connection)
{
  die( "Connection Fail".mysqli_connect_errno());
}