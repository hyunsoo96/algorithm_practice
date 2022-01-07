let str = "OgooGo";

function solution(str) {
  let ans = "YES";
  let tmp = "";

  tmp = str.toUpperCase();

  for (let i = 0; i < str.length; i++) {
    if (tmp[i] !== tmp[str.length - 1 - i]) {
      ans = "NO";
      break;
    }
  }

  return ans;
}

console.log(solution(str));
