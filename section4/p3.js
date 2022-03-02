let input = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

function solution(input) {
  let flag = true;
  let ans = [];

  for (let i = 1; i <= input[0].length; i++) {
    for (let j = 1; j <= input[0].length; j++) {
      if (i == j) break;
      for (let k = 0; k < input.length; k++) {
        if (input[k].indexOf(i) > input[k].indexOf(j)) {
          flag = false;
        }
      }
      if (flag) ans.push([i, j]);
      flag = true;
    }
  }
  return ans;
}

console.log(solution(input));
