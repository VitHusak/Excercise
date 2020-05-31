<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LOOPS</title>
</head>
<body>
  <?php
  $time_served = 0;

  while($time_served < 10) {
    echo "The prisoner has served $time_served years.<br>";
    $time_served++;
  };

  echo '<br>';
  echo '<br>';

  $time = 0;

  do {
    echo "The prisoner has served $time years.<br>";
    $time++;
  } while($time < 10);

  echo '<br>';
  echo '<br>';

  for($i = 1; $i <= 5; $i++) {
    echo "The prisoner has $i more years to serve.<br>";
  };

  echo '<br>';
  echo '<br>';


  for($i = 10; $i > 0; $i--) {
    echo "The prisoner has $i more years to serve.<br>";

    if($i > 5) {
      continue;
    } elseif($i === 2) {
      echo "Paroled!";
      break;
    } else {
      echo "Going to a parole hearing...<br>";
    };

        
  };

  ?>


</body>
</html>