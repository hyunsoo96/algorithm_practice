let problem = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

function solution(problem) {
  let score = 0;
  let tmp = 0;

  for (let x of problem) {
    if (x == 1) {
      score += 1 + tmp;
      tmp++;
    } else {
      tmp = 0;
    }
  }
  return score;
}

console.log(solution(problem));
