<?php
function isPrime($num) {
  for ($i = 2; $i < $num; $i++) {
    if ($num % $i === 0) {
      return false;
    }
  }
    return true;
}

function computePrimeSequence($n) {
  $result = [2];
  for ($i = 3; $i < $n; $i += 2) {
    if (isPrime($i)) {
      $result[] = $i;
    }
  }
    return $result;
}

echo json_encode(computePrimeSequence(5000));