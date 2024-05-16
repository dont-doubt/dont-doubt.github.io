
const matrix = [
  [6, 3, 9, 2, 7, 8, 1],
  [1, 5, 4, 9, 2, 3, 6],
  [7, 8, 6, 3, 1, 2, 9],
  [4, 9, 3, 7, 6, 1, 2],
  [2, 6, 1, 8, 9, 4, 3]
]

const transpose = m => m[0].map((x, i) => m.map(x => x[i]));

const transposed = transpose(matrix)
for (const l of transposed) 
  l.sort((a, b) => a - b)
for (const j of transpose(transposed)) 
  console.log(j)
