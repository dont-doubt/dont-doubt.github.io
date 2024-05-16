
function reverseArray(a) {
  const b = Array(a.length)
  for (let i = a.length - 1; i >= 0; i--)
    b[i] = a[i]
  return b
}

function reverseArrayInPlace(a) {
  for (let i = 0, l = a.length; i < l / 2; i++) 
    [a[l - i - 1], a[i]] = [a[i], a[l - i - 1]]
}

console.log(reverseArray(["A", "B", "C"]))

const a = [1, 2, 3, 4, 5]
reverseArrayInPlace(a)
console.log(a)

