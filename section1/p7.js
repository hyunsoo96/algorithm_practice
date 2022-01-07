let day = 0;
let number = [12, 20, 54, 30, 87, 91, 30];

function solution(day, number) {
  let ans = 0;

  for (x of number) {
    if (x % 10 == day) ans++;
  }
  return ans;
}

console.log(solution(day, number));
