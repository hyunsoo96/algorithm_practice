let N = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
let K = 3;

function solution(N, K) {
  let sumArray = [];

  sumArray = sum3(N);
  let set = new Set(sumArray);
  sumArray = Array.from(set);
  sumArray.sort((a, b) => b - a);
  console.log(sumArray);
  return sumArray[2];
}

function sum3(N) {
  let tmp = [];
  for (let i = 0; i < N.length - 2; i++) {
    for (let j = i + 1; j < N.length - 1; j++) {
      for (let k = j + 1; k < N.length; k++) {
        tmp.push(N[i] + N[j] + N[k]);
      }
    }
  }
  return tmp;
}

console.log(solution(N, K));
