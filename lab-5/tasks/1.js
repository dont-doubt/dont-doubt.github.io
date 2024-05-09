
const r = prompt("Введите радиус")
if (isNaN(+r)) throw Error('NaN')
console.log(`Площадь круга с r=${r}: ${Math.PI * r * r}`);
