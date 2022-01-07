let a = [12, 77, 38, 41, 53, 92, 85];

function solution(a) {
  let ans_least = Number.MAX_SAFE_INTEGER;
  let ans_sum = 0;
  let answer = [];

  for (let i = 0; i < 7; i++) {
    if (a[i] % 2 != 0) {
      ans_sum += a[i];
      if (a[i] < ans_least) ans_least = a[i];
    }
  }
  answer.push(ans_sum);
  answer.push(ans_least);

  return answer;
}

console.log(solution(a));
