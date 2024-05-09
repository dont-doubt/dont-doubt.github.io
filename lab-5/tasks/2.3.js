function findPrimes(max) {
  let sieve = [], i, j, primes = []
  for (i = 2; i <= max; ++i) {
    if (!sieve[i]) {
      primes.push(i)
      for (j = i << 1; j <= max; j += i) {
        sieve[j] = true
      }
    }
  }
  return primes
}

const n = ~~prompt("Введите N")
console.log(findPrimes(n));
  