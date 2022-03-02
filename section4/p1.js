let N = [128, 460, 603, 40, 1217, 521, 137, 123];

function solution(N) {
  let maxNum = Number.MIN_SAFE_INTEGER;
  let maxDigit = Number.MIN_SAFE_INTEGER;
  let tmpNum = 0;
  let tmpDigit = 0;

  for (let x of N) {
    tmpNum = x;
    tmpDigit = sumOfDigit(x);
    if (tmpDigit > maxDigit) {
      maxDigit = tmpDigit;
      maxNum = x;
    } else if (tmpDigit == maxDigit) {
      maxNum = maxNum > tmpNum ? maxNum : tmpNum;
    }
  }
  return maxNum;
}

function sumOfDigit(x) {
  let sum = 0;
  let remainder = 0;

  while (x != 0) {
    remainder = x % 10;
    sum += remainder;
    x = (x - remainder) / 10;
  }

  return sum;
}
console.log(solution(N));
