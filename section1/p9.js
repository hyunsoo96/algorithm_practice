let str = "BANANA";

function solution(str) {
  let ans = "";

  for (let x of str) {
    if (x == "A") {
      ans += "#";
    } else {
      ans += x;
    }
  }
  return ans;
}

console.log(solution(str));
