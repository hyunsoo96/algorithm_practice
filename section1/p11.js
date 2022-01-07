let str = "KoreaTimeGood";

function solution(str) {
  let ans = 0;

  for (let x of str) {
    if (x.charCodeAt() < "a".charCodeAt()) ans++;
  }
  return ans;
}

console.log(solution(str));
