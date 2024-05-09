function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false
  }
  return num > 1
}
  
function primesInRange(n, m) {
  let primes = []
  for (let i = n; i <= m; i++) {
    if (isPrime(i)) primes.push(i)
  }
  return primes
}
  
let n = ~~prompt("Введите N (от)")
let m = ~~prompt("Введите M (до)")
if (m < n) [m, n] = [n, m]
console.log(primesInRange(n, m))
  