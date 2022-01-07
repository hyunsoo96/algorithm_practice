let students_score = [100, 100, 90, 95, 95, 80];

function solution(students_score) {
  let ans = [];
  let tmp = 0;
  for (let i = 0; i < students_score.length; i++) {
    for (let j = 0; j < students_score.length; j++) {
      if (students_score[i] < students_score[j]) tmp++;
    }
    ans.push(tmp + 1);
    tmp = 0;
  }
  return ans;
}

console.log(solution(students_score));
