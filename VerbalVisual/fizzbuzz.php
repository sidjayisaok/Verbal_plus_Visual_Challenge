<?php

#basic fizzbuzz algorithm
#this is modified to work with the Euler Challenge problem

#start of the function
function fizzbuzz($param){
    #create an array
    $array = array();
    #begin a loop
    for ($i=1; $i <= $param; $i++){
        #detect values divisible by 3 and 5
        if($i % 3 == 0 && $i % 5 == 0){
            Print "fizzbuzz \n";
            #push to array
            array_push($array, $i);
        }
        #detect values divisible by three
        elseif($i % 3 == 0){
            Print "fizz \n";
            array_push($array, $i);
        }
        #detect values divisible by 5
        elseif($i % 5 == 0){
            Print "buzz \n";
            array_push($array, $i);
        }
        else{
            Print "$i \n";
        }
    }
    #print results
    print_r($array);
    Print "Total = " . array_sum($array) . "\n";
}

#pass a parameter and call it
fizzbuzz(999);

#answer should be 233168

?>