<?php


class dbConnect
{
    private $link;
    private $host="localhost";
    private $user="root";
    private $pass="";
    private $base="practice";
    private $dbtable="user";

    public function __construct(){
        $this->conndb();
    }
    private function conndb(){
        try {
            $this->link = new PDO("mysql:host=$this->host;
            dbname=$this->base", $this->user, $this->pass);
        }
        catch (PDOException $e){
            print "Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }
    public function execute($sql){
        $sth = $this->link->prepare($sql);
        return $sth->execute();
    }
    public function query($sql){
        $sth=$this->link->prepare($sql);
        $sth->execute();
        $result = $sth->fetchAll(PDO::FETCH_ASSOC);
        if ($result===false){
            return[];
        }
        return $result;
    }
}
$conn=new dbConnect();
//$conn->execute("INSERT INTO `user` (users_name, users_age)
//    VALUES ('Вадим',36), ('Алексей',42)");
$users = $conn->query("SELECT * FROM `user` LIMIT 2");
//print_r($users);
//$users2=$conn->query("SELECT * FROM `user` WHERE `user_id` = $id");