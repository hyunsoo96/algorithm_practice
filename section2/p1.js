let n = [7, 3, 9, 5, 6, 12];

function solution(n) {
  let ans = [];

  for (let i = 0; i < n.length; i++) {
    if (i == 0) ans.push(n[i]);
    else {
      if (n[i] > n[i - 1]) ans.push(n[i]);
    }
  }
  return ans;
}

console.log(solution(n));
