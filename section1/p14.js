let str = ["teacher", "time", "student", "beautiful", "good"];

function solution(str) {
  let ans = "";

  for (let x of str) {
    if (ans.length < x.length) {
      ans = x;
    }
  }
  return ans;
}

console.log(solution(str));
