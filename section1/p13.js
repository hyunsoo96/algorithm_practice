let str = "StuDY";

function solution(str) {
  let ans = "";
  let gap = "a".charCodeAt() - "A".charCodeAt();

  for (let x of str) {
    if (x.charCodeAt() < "a".charCodeAt()) {
      ans += String.fromCharCode(x.charCodeAt() + gap);
    } else {
      ans += String.fromCharCode(x.charCodeAt() - gap);
    }
  }
  return ans;
}

console.log(solution(str));
