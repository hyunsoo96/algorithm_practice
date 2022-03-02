let input = [32, 55, 62, 20, 250, 370, 200, 30, 100];

function solution(input) {
  let sol = [];
  let tmp = 0;

  for (let x of input) {
    tmp = reverse(x);
    if (primeNumber(tmp)) {
      sol.push(tmp);
    }
  }
  return sol;
}

function primeNumber(x) {
  if (x == 1) return false;
  for (let i = 2; i < x; i++) {
    if ((x / i) % 1 == 0) return false;
  }
  return true;
}

function reverse(x) {
  let tmp = [];
  let ans = 0;

  while (x != 0) {
    tmp.push(x % 10);
    x = (x - (x % 10)) / 10;
  }
  ans = tmp.join("");
  ans = Number.parseInt(ans);

  return ans;
}

reverse(1234);
console.log(solution(input));
