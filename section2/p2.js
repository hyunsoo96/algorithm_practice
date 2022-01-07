let n = [130, 135, 148, 140, 145, 150, 150, 153];

function solution(n) {
  let ans = 0;
  let heightest = 0;

  for (let x of n) {
    if (x > heightest) {
      ans++;
      heightest = x;
    }
  }

  return ans;
}

console.log(solution(n));
