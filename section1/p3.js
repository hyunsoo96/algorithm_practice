let N = 59;
const pencilDas = 12;

function solution(N) {
  let ans;
  if (N % pencilDas == 0) ans = N / pencilDas;
  else ans = (N - (N % pencilDas)) / pencilDas + 1;
  return ans;
}

console.log(solution(N));
