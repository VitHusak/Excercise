<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>php</title>
</head>
<body>
  <h1>php</h1>

  <script>
  //this is javascript
  </script>
  <h3>Function</h3>

  <?php
    $first_name = 'Vít';
    $surname = 'Husák';

    echo 'First Name: ' . ( $first_name );
    echo '<br>';
    echo 'Surname: ' . ($surname);

    echo '<br>';
    echo '<br>';
    echo '<br>';

    echo 'First Name: ' . ( $first_name ) . '<br> Surname: ' . ($surname);

    echo '<br>';
    echo '<br>';
    echo '<br>';

    $year_of_birth = 1991;
    $height = 180;

    echo 'Year of birth: ' . $year_of_birth . '<br> Height: ' . $height;

    echo '<br>';
    echo '<br>';
    echo '<br>';

    define('SERVER_SOFTWARE', 'Apache');
    echo 'This server is runnig on ' . (SERVER_SOFTWARE) . '.';

    echo '<br>';
    echo '<br>';
    echo '<br>';
    
    define('MY_OS', 'Windows');
    echo 'My Operating system is ' . MY_OS;    

  ?>
  <h3>Function</h3>
  <?php 
    function greet() {
      echo 'Hello World';
    };

    greet();

    echo '<br>';


    function greetTown($whom) {
      echo 'Hello, ' . $whom . '!';
    };

    greetTown('Prague');

    echo '<br>';

    function greetTownResult($whom) {
      return 'Hello, ' . $whom . '!';
    }

    echo greetTownResult('Brno')

  ?>

  <h3>Array</h3>

  <?php 
    $cars_i_want = [];

    var_dump($cars_i_want);

    echo '<br>';

    $cars_i_want[1] = 'Aston Martin';
    $cars_i_want[] = 'Bugatti';
    $cars_i_want[] = 'Ferrari';
    $cars_i_want[] = 'Lamborghini';
    $cars_i_want[] = 'Maserati';
    $cars_i_want[] = 'Mercedes';
    $cars_i_want[] = 'Porsche';
    $cars_i_want[] = 'Skoda';
    var_dump($cars_i_want);

    echo '<br>';
    echo '<br>';


    echo 'For myself I would buy' . $cars_i_want[1];

    echo '<br>';
    echo '<br>';

    echo 'For my spouse I would buy ' . $cars_i_want[3] .'.';

    echo '<br>';
    echo '<br>';

    $cars_i_want[4] = 'Smart';
    var_dump($cars_i_want);
    echo '<br>';
    echo '<br>';
    echo 'Each of my kids will get a ' . $cars_i_want[4] . '.';
  ?>
  <h3>Foreach loop</h3>

  <?php

  echo '<ul>';

    foreach($cars_i_want as $value) {
      echo '<li>' . $value . '</li>';
    };

  echo '</ul>';

  ?>

<h3>Associative Array</h3>
<?php
  $car_prices = [
    'Skoda Octavia' => 270000,
    'Volkswagen Golf' => 170000,
    'BMW X6' => 380000,
    'Porsche 911' => 1150000
  ];

  echo 'You can have a Porsche for just ' . $car_prices['Porsche 911'] . ' CZK.';

  echo '<br>';
  echo '<br>';

  foreach($car_prices as $key => $value) {
    echo 'The price of ' . $key . ' is ' . $value . ' CZK.<br>';
  };


?>

    
</body>
</html>