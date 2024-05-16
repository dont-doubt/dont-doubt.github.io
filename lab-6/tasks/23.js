class MultiplicatorUnitFailure extends Error {
  constructor(message) {
    super(message)
    this.name = this.constructor.name
  }
}

function primitiveMultiply(a, b) {
  console.log(`Trying...`)
  if (Math.random() < 0.5)
    return a * b
  else
    throw new MultiplicatorUnitFailure()
}

function reliableMultiply(a, b) {
  while (true) {
    try {
      return primitiveMultiply(a, b)
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure)) throw e
    }
  }
}

console.log(reliableMultiply(8, 8))