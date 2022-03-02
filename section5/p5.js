let input = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
let k = 3;

function solution(input, k) {
  let sum = 0;
  let ans = 0;
  for (let i = 0; i < k; i++) {
    sum += input[i];
  }
  ans = sum;
  for (let i = k; i < input.length; i++) {
    sum = sum + input[i] - input[i - k];
    ans = Math.max(ans, sum);
  }
  return ans;
}

console.log(solution(input, k));
