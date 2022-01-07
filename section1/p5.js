let a = [5, 3, 7, 11, 2, 15, 17];

function solution(a) {
  let ans = a[0];
  for (let i = 1; i < 7; i++) {
    if (a[i] < ans) ans = a[i];
  }
  return ans;
}

console.log(solution(a));
