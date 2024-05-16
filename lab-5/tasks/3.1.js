const matrix = [
  [9, 2, 23, 0, 21],
  [-8, 4, 2, 17, 9],
  [5, 13, 2, 7, -6],
  [7, 2, 19, 0, 23],
  [6, 2, 20, 0, 19],
  [-4, 4, 2, 17, 9],
];

for (const i in matrix) {
  for (const j in matrix[i]) {
    matrix[i][j] = matrix[i][j] * (i + 1)
  }
  console.log(matrix[i]);
}