let input = [1, 2, 1, 3, 1, 1, 1, 2];
let M = 6;

function solution(input, M) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
      if (splitArraySum(input, i, j) > M) break;
      if (splitArraySum(input, i, j) == M) count++;
    }
  }
  return count;
}

function splitArraySum(x, start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += x[i];
  }
  return sum;
}
console.log(solution(input, M));
