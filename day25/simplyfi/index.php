<?php
 
$array = array();
for($i = 1; $i <= 10; $i++) {
    array_push($array, $i);
}
 
$string = "I am a simple string";
 
// Create a variable $arrayDouble containing the double of each value of $array
function double($number)
{
 return $number *=2;
};


$arrayDouble = array_map('double', $array);

print_r($arrayDouble);




 
// Create two variables $arrayEven and $arrayOdd containing the Even numbers contained in $array and the Odd numbers contained in $array
echo '<br>';
echo '<br>';

$arrayEven = [];
$arrayOdd = [];
foreach ($array as $value) {
  if ($value%2 === 0) {
    array_push($arrayEven, $value);
  } else {
    array_push($arrayOdd, $value);
  };
};


echo 'EVEN';
print_r($arrayEven);
echo '<br>ODD';
var_dump($arrayOdd);

echo '<br>';
echo '<br>';
 
// Create a variable $arrayProduct containing the product of each numbers of $array
$arrayProduct = 1;

function times($num1, $num2) {
  return $num1 *= $num2;
};

foreach($array as $value) {
  $arrayProduct = times($arrayProduct, $value);
};


print_r($arrayProduct);


echo '<br>';
echo '<br>';


// Create a variable $stringUpper containing the $string value in uppercase
$stringUpper = strtoupper('moje mama');
print_r($stringUpper);

echo '<br>';
echo '<br>';

// Create a variable $stringFirstUp containing the $string value with the first character in uppercase
$string = 'aghoj tady je tady Nějak poplach s písmenkama.';
for($i = 0; $i < strlen($string); $i++) {
  if ($i === 0) {
    $string[0] = strtoupper($string[0]);
  } else {
    $string[$i] = strtolower($string[$i]);
  };

};

$stringFirstUp = $string;
print_r($stringFirstUp);