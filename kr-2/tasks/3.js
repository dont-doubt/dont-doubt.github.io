const matrix = [
  [8, 4, -2, 19, 17, 7, 8, 9],
  [5, 13, 2, -6, 7, 7, 8, 9],
  [7, 2, 19, 23, 0, 5, 8, 9],
  [-8, 4, 2, 9, 17, 7, 8, 9],
  [7, 12, 19, 23, 0, 3, 9, 9],
  [-8, 4, 2, 9, 23, 8, 2, 9],
  [9, 2, 19, 22, 0, 7, 5, 9],
  [7, 2, 5, 23, 0, 9, 8, 9]
]

const size = 8

const arr = matrix.flat(1).toSorted((a, b) => a - b)

for (let row = 0; row < size; row++) {
  for (let col = 0; col < size; col++) {
    const invRow = size - row - 1
    if (invRow % 2 === 0) {
      matrix[row][col] = arr[invRow * size + (size - col - 1)]
    } else {
      matrix[row][col] = arr[invRow * size + col]
    }
  }
}

for (const i in matrix) {
  console.log(JSON.stringify(matrix[i]))
}