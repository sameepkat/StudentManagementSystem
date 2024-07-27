<?php
if($_SERVER['REQUEST_METHOD']=='GET'){
    session_destroy();
    header('Location: ../login/login.html');
}
?>