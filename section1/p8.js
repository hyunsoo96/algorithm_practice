let height = [20, 7, 23, 19, 10, 15, 25, 8, 13];

function solution(height) {
  let sum = 0;
  let i = 0,
    j = 1;
  for (x of height) sum += x;

  for (i = 0; i < height.length - 1; i++) {
    for (j = 1; j < height.length; j++) {
      if (sum - height[i] - height[j] == 100) {
        height.splice(i, 1);
        height.splice(j - 1, 1);
        break;
      }
    }
  }
  return height;
}

console.log(solution(height));
