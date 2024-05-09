function sin(x) {
  let sin = x
  let sign = 1
  let fact = 1
  let pow = x
  for (let i = 2; i < 30; i += 2) {
    pow *= x * x
    fact *= i * (i + 1)
    sign *= -1
    sin += sign * (pow / fact)
  }
  return sin
}

const deg = prompt("Введите угол в градусах")
if (isNaN(+deg)) throw Error('NaN')
console.log(`sin(${deg}) = ${sin(deg * (Math.PI / 180))}`)