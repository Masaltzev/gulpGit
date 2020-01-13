<?php
dbConn();
function dbConn(){
    $serverName = "localhost";                  
    $user = "root";
    $pass = "";
    $dbName = "practice2";
    try {
        $conPDO = new PDO("mysql:host=$serverName;dbname=mysql", $user, $pass);
        // $conPDO -> setAttribute (PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);                 
        //$dbh = null;
        dbCrt($dbName,$conPDO);
        dbQr($conPDO);
        //dbinto($conPDO);
    }
    catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }
    $conPDO = null;
}
function dbCrt($dbName,$conPDO){
    $sql ="CREATE DATABASE $dbName";
    $conPDO->exec($sql);
    echo "Database created successfully";
    // $conPDO = null;
}
function dbQr($conPDO){
    $sql2 ="CREATE TABLE practice.user(
        `user_id` INT NOT NULL AUTO_INCREMENT,
        `users_name` varchar(30) NOT NULL,
        `users_age` INT NOT NULL,
        PRIMARY KEY (`user_id`)
        )";
    $conPDO->exec($sql2);
    echo "</br>"."Table created successfully";
}
function dbinto($conPDO){
    $sql3 = "INSERT INTO practice.user(
        `users_name`, `users_age`)
        VALUES 
        ('Boris', 36),
        ('Boris2', 100)";
    $conPDO->exec($sql3);
    $listEcho = "</br>"."Record created";
    echo $listEcho;
}
?>