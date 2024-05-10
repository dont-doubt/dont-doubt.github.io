
let sum = 1
let x = 0, y = 1
for (let i = 1; i < 10; i++) {
  const n = x + y
  x = y
  y = n
  sum += n
}
console.log(sum)
