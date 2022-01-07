let a = 13,
  b = 33,
  c = 17;

function solution(a, b, c) {
  let ans = "YES";

  if (a > b + c || b > a + c || c > a + b) ans = "NO";
  return ans;
}

console.log(solution(a, b, c));
