let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];

function solution(a, b) {
  let ans = "";

  for (let i = 0; i < a.length; i++) {
    switch (a[i]) {
      case 1:
        switch (b[i]) {
          case 1:
            ans += "D";
            break;
          case 2:
            ans += "B";
            break;
          case 3:
            ans += "A";
        }
        break;
      case 2:
        switch (b[i]) {
          case 1:
            ans += "A";
            break;
          case 2:
            ans += "D";
            break;
          case 3:
            ans += "B";
        }
        break;
      case 3:
        switch (b[i]) {
          case 1:
            ans += "B";
            break;
          case 2:
            ans += "A";
            break;
          case 3:
            ans += "D";
        }
    }
  }
  return ans;
}

console.log(solution(a, b));
