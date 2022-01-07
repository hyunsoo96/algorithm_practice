let str = "ksekkset";

function solution(str) {
  let ans = [...str];

  ans = ans.filter(function (element, index) {
    return ans.indexOf(element) == index;
  }, 0);
  ans = ans.join("");
  return ans;
}

console.log(solution(str));
