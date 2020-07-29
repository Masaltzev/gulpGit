<?php
class worker{
    private $name;
    private $age;
    private $salary;


    public function setName($name): void
    {
        $this->name = $name;
    }
    public function getName()
    {
        return $this->name;
    }
    public function setAge($age): void
    {
            $this->age = $age;
    }
    public function setSalary($salary): void
    {
        $this->salary = $salary;
    }
    public function checkAge(){
        if ($this->age>0 and $this->age<100){
            return  $this->age;
        }
        else{
            $this->age="";
        }
    }

    public function getAge()
    {
            return $this->checkAge();
    }
    public function getSalary()
    {
        return $this->salary;
    }
}
$work1=new worker();
$work2=new worker();
$work1->setName('ivan');
$work2->setName('vano');
$work1->setAge('26');
$work2->setAge('28');
$work1->setSalary('2000');
$work2->setSalary('700');
echo $work1->getName();
echo "<br>";
echo $work2->getName();
echo "<br>";
echo $work1->getAge()+$work2->getAge();
echo "<br>";
echo $work1->getSalary()+$work2->getSalary();


