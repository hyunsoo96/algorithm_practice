let a = 11,
  b = 6,
  c = 5;

function solution(a, b, c) {
  let ans;
  ans = a;
  if (c < b) {
    if (c < ans) {
      ans = c;
    }
  } else {
    if (b < ans) {
      ans = b;
    }
  }
  return ans;
}

console.log(solution(a, b, c));
