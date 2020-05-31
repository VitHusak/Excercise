<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>functions, operators & conditions</title>
</head>
<body>
  <h1>functions, operators & conditions</h1>

  <?php
    const BR = '<br>';
    $my_name = 'Vít Husák';
    $height = '1.78';

    var_dump($my_name);
    echo BR;
    var_dump($height);
    echo BR;

    function headline($text) {
      echo "<h2>$text</h2>";
    };

    headline('Ahoj, jak se vede?');

    function headline2($text) {
      return "<h2>$text</h2>";
    };

    echo headline2("tohle je s return");

    $inches = 12;

    function inchesToCentimeters($someInches){
      return $someInches*2.54; 
    };

    echo inchesToCentimeters($inches);

    echo BR;

    $celsius = 100;

    function celsiusToFahrenheit($cels) {
      return (9/5)*$cels + 32;
    };

    echo celsiusToFahrenheit($celsius);

    echo BR;
    echo BR;


    $temperature = 36.5;

    function isHealthy($tem, $unit) {
      $convertTemp = $unit === 'f' ? ($tem - 32)*(5/9) : $tem;
      $result = $convertTemp < 37 ? "true" : "false";
      return $result;
    };

    echo isHealthy($temperature, 'c');

    echo BR;
    echo BR;

    $number = 43;

    function evenOrOdd($num) {
      return $num%2 === 0 ? 'even' : 'odd';
    };

    echo evenOrOdd($number);

    echo BR;
    echo BR;

    $weekday = 'friday';

    function sayWeekday($day) {
      return "Today is $day.";
    };

    echo sayWeekday($weekday);
    echo BR;
    echo BR;

    $year_of_birth = 1991;

    function sayBirthday($birth) {
      $this_year = date('Y');
      $difference = $this_year - $birth;
      return "I was born in $birth so this year I am celebrating my $difference. birthday.";
    };

    echo sayBirthday($year_of_birth);
    echo BR;
    echo BR;

    function assessHeight($height) {
      return $height >= 180 ? "tall" : ( $height >= 160 ? "average" : "small");
    };

    echo assessHeight(150);

    echo BR;
    echo BR;

    function getLanguageUsage($language) {
      
      
      switch(strtolower($language)) {
        case 'php':
          return 'serverside';
        break;
        case 'python':
          return 'serverside';
        break;
        case 'ruby' :
          return 'serverside';
        break;
        case 'javascript':
          return 'clientside';
        break;
        default: "I don't know";
        break;
      };
    };

    echo getLanguageUsage('javAscript');

    echo BR;
    echo BR;

    $age = 29;
    $gender = 'male';
    $employed = false;




  ?>





</body>
</html>