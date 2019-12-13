<?php
    $serverName = "localhost";                  
    $user = "root";
    $pass = "";
    $dbName = "practice";
    try {
        $conPDO = new PDO("mysql:host=$serverName;dbname=mysql", $user, $pass);
        // $conPDO -> setAttribute (PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);                 
        $dbh = null;
        $sql ="CREATE DATABASE $dbName";
        $conPDO->exec($sql);
        echo "Database created successfully";        
    }
    catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }

?>  