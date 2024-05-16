
const range = (a, b, step = 1) => Array.from({ length: (b - a) / step + 1}, (_, i) => a + (i * step))
const sum = (a) => a.reduce((a, b) => a + b, 0)

console.log(range(1, 10))
console.log(range(5, 2, -1))
console.log(range(8, 0, -2))
