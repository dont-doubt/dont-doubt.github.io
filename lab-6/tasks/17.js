
function every(array = [], fn) {
  for (let i = 0; i < array.length; i++) {
    if (!fn(array[i])) return false
  }
  return true
}

function some(array = [], fn) {
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) return true
  }
  return false
}

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));