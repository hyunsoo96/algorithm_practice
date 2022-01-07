let matrix = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

function solution(matrix) {
  let ans = 0;
  let tmp = 0;
  let row_sum = 0;
  let col_sum = 0;
  let dig1_sum = 0;
  let dig2_sum = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      row_sum += matrix[row][col];
      col_sum += matrix[col][row];
    }
    // console.log(row_sum);
    // console.log(col_sum);
    if (row_sum > col_sum) {
      tmp = row_sum;
      row_sum = 0;
      col_sum = 0;
    } else {
      tmp = col_sum;
      row_sum = 0;
      col_sum = 0;
    }

    if (tmp > ans) {
      ans = tmp;
      tmp = 0;
    }
    dig1_sum += matrix[row][row];
    dig2_sum += matrix[row][matrix.length - 1 - row];
  }
  if (dig1_sum > dig2_sum) {
    if (dig1_sum > ans) ans = dig1_sum;
  } else {
    if (dig2_sum > ans) ans = dig2_sum;
  }

  //   console.log(dig1_sum);
  //   console.log(dig2_sum);

  return ans;
}

console.log(solution(matrix));
