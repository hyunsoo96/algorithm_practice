let map = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

function padding(map) {
  let pad_map = [];
  let tmp_row = [];
  for (let i = 0; i < map.length + 2; i++) tmp_row.push(0);
  pad_map.push(tmp_row);
  tmp_row = [];

  for (let i = 0; i < map.length; i++) {
    map[i].push(0);
    map[i].splice(0, 0, 0);
    pad_map.push(map[i]);
  }

  for (let i = 0; i < map.length + 2; i++) tmp_row.push(0);
  pad_map.push(tmp_row);

  return pad_map;
}
function solution(map) {
  let pad_map = padding(map);
  let count = 0;
  let ans = 0;

  for (let i = 1; i < pad_map.length - 1; i++) {
    for (let j = 1; j < pad_map.length - 1; j++) {
      if (pad_map[i][j] > pad_map[i - 1][j]) count++;
      if (pad_map[i][j] > pad_map[i + 1][j]) count++;
      if (pad_map[i][j] > pad_map[i][j - 1]) count++;
      if (pad_map[i][j] > pad_map[i][j + 1]) count++;

      if (count == 4) ans++;

      count = 0;
    }
  }
  return ans;
}

console.log(solution(map));
