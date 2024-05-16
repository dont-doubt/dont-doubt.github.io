
function arrayToObject(array) {
  let object = null
  for (let i = array.length - 1; i >= 0; i--) {
    object = { value: array[i], rest: object }
  }
  return object
}

function objectToArray(object) {
  let array = []
  for (let node = object; node; node = node.rest) {
    array.push(node.value)
  }
  return array
}

function prepend(value, object) {
  return { value, rest: object }
}

function nth(object, num) {
  return objectToArray(object)[num]
}

console.log(arrayToObject([10, 20]))
console.log(objectToArray(arrayToObject([10, 20, 30])))
console.log(prepend(10, prepend(20, null)))
console.log(nth(arrayToObject([10, 20, 30]), 1))