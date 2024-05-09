function cos(x) {
  let cos = 1
  let sign = 1
  let fact = 1
  let pow = 1
  for (let i = 2; i < 30; i += 2) {
    pow *= x * x
    fact *= (i - 1) * i
    sign *= -1
    cos += sign * (pow / fact)
  }
  return cos
}

const deg = prompt("Введите угол в градусах")
if (isNaN(+deg)) throw Error('NaN')
console.log(`cos(${deg}) = ${cos(deg * (Math.PI / 180))}`)