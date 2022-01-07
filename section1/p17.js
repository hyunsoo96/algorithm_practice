let str = ["good", "time", "good", "time", "student"];

function solution(str) {
  let ans = [];

  ans = str.filter(function (element, index) {
    return str.indexOf(element) == index;
  }, 0);

  return ans;
}

console.log(solution(str));
