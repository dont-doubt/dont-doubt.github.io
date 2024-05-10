const matrix = [
  [5, 13, 2, -6, 7, 6, 7, 8, 9],
  [7, 2, 19, 23, 4, 6, 10, 8, 9],
  [-8, 4, 2, 9, 17, 6, 7, 8, 9],
  [7, 12, 19, 23, 5, 6, 8, 9, 9],
  [-8, 4, 2, 9, 23, 6, 8, 2, 9],
  [9, 2, 19, 22, 5, 6, 7, 5, 9],
  [7, 2, 5, 23, 5, 6, 9, 8, 9]
]
  
let count = 0, sum = 0
for (const i in matrix) {
  for (const j in matrix[i]) {
    count++
    sum += matrix[i][j]
  }
}
const mean = sum / count

console.log('mean:', mean)

const newMatrix = []
for (const i in matrix) {
  newMatrix[i] = []
  for (const j in matrix[i]) {
    newMatrix[i][j] = matrix[i][j] - mean
  }
}

for (const i in newMatrix) {
  console.log(JSON.stringify(newMatrix[i]))
}