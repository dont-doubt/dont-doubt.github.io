
function deepEqual(a, b) {
  if (a === b) return true
  if ((typeof a == "object" && a != null) && (typeof b == "object" && b != null)) {
    if (Object.keys(a).length !== Object.keys(b).length) return false
    for (const prop in a) {
      if (b.hasOwnProperty(prop)) {
        if (!deepEqual(a[prop], b[prop])) return false
      } else {
        return false
      }
    }
    return true
  }
  return false
}

const obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));