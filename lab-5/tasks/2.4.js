function toPrimes(n) {
  const primes = []
  let i = 2
  while (i <= n) {
    if (n % i === 0) {
      primes.push(i)
      n /= i
    } else {
      i++
    }
  }
  return primes
}

const n = ~~prompt("Введите N")
console.log(toPrimes(n).join(' * ') + ' = ' + n);
  