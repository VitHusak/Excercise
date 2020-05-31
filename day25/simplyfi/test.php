<?php
function compare($num1, $num2) {
  if($num1 == $num2) {
    return 0;
  } elseif($num1 > $num2) {
    return 1;
  } else {
    return -1;
  };
};

function giveClue($diff) {
  if($diff === 0) {
    echo "Success ! You find the right number.";
  } elseif($diff === 1) {
    echo "The given number is too low.";
  } else {
  echo "The given number is too height.";
  };
};


function getGivenNumber() {
  $num = readline("Please enter some number: ");
  return $num;
};

function replay() {
  $replay = readline("Do you want replay? (Yes/y or No/n: ");

  if(($replay === 'Yes') || ($replay === 'yes') || ($replay === 'y') ||($replay === 'Y')) {
    return 'true';
  } else {
    return 'false';
  };
};

function play(){
  $random_num = rand(0, 1000);
  echo $random_num;

  function new_num($random_num) {
    $newNum = getGivenNumber();
    $result_clue = compare($random_num, $newNum);
    giveClue($result_clue);

    if($result_clue != 0) {
      new_num($random_num);
    };
  };

  new_num($random_num);
};

play();




