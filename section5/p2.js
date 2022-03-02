let a1 = [1, 3, 9, 5, 2];
let a2 = [3, 2, 5, 7, 8];

function solution(a1, a2) {
  a1.sort((a, b) => a - b);
  a2.sort((a, b) => a - b);
  let result = [];
  console.log(a1, a2);
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      if (a1[i] < a2[j]) break;
      if (a1[i] == a2[j]) result.push(a1[i]);
    }
  }
  return result;
}

console.log(solution(a1, a2));
