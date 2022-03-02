let a1 = [1, 3, 5];
let a2 = [2, 3, 6, 7, 9];

function solution(array1, array2) {
  let result = [];

  while (array1.length != 0 || array2.length != 0) {
    if (array1[0] <= array2[0]) {
      result.push(array1.shift());
    } else {
      result.push(array2.shift());
    }
  }
  result.concat(array1);
  result.concat(array2);

  return result;
}

console.log(solution(a1, a2));
