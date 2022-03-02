let student = 5;
let budget = 28;
let present = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

function solution(budget, present) {
  let tmp = [];
  let count = 0;
  let sum = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < present.length; i++) {
    present[i][0] /= 2;
    for (let j = 0; j < present.length; j++) {
      tmp.push(present[j][0] + present[j][1]);
    }
    present[i][0] *= 2;
    tmp.sort((a, b) => a - b);
    for (let k = 0; k < tmp.length; k++) {
      sum += tmp[k];
      if (sum > budget) break;
      count++;
    }
    if (count > max) max = count;
    count = 0;
    tmp = [];
    sum = 0;
  }
  return max;
}

console.log(solution(budget, present));
