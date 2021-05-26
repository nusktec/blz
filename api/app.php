<?php
/**
 * Created by RSC BYTE LTD.
 * Author: Revelation A.F
 * Date: 19/05/2021 - app.php
 */
include "SimpleOrm.class.php";
//do connection

$conn = new mysqli('localhost', 'root', '');

if($conn->connect_errno)
    die('Db not initialized ! - '.$conn->connect_errno);

//Tell simple orl to use it
SimpleOrm::useConnection($conn, "blz_lg");

//include model
include "UserModel.php";