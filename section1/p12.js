let str = "ItisTimeToStudy";

function solution(str) {
  let ans = "";
  let gap = "a".charCodeAt() - "A".charCodeAt();

  for (let x of str) {
    if (x.charCodeAt() >= "a".charCodeAt()) {
      ans += String.fromCharCode(x.charCodeAt() - gap);
    } else {
      ans += x;
    }
  }
  return ans;
}

console.log(solution(str));
