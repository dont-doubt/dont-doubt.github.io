function countChar(str, c) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === c) count += 1
  }
  return count
}

console.log(countChar("hello world", "l"))
