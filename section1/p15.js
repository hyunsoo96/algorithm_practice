let str = "good";

function solution(str) {
  let ans = "";

  if (str.length % 2 == 0) {
    ans += str.charAt(str.length / 2 - 1);
    ans += str.charAt(str.length / 2);
  } else {
    ans += str.charAt((str.length - 1) / 2);
  }
  return ans;
}

console.log(solution(str));
