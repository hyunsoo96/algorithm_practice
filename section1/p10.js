let str = "COMPUTERPROGRAMMING";
let char = "R";
function solution(s, c) {
  let ans = 0;

  for (let x of s) {
    if (x == c) ans++;
  }

  return ans;
}

console.log(solution(str, char));
