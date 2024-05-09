function toPrimes(n) {
  const factors = []
  let i = 2
  while (i <= n) {
    if (n % i === 0) {
      factors.push(i)
      n /= i
    }
    else {
      i++
    }
  }
  return factors
}

const n = ~~prompt("Введите N")
console.log(toPrimes(n).join(' * ') + ' = ' + n);
  