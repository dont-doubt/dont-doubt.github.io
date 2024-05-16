class Sequence {
  next() {}
  isEnd() {}
}

class ArraySeq extends Sequence {
  constructor(arr) {
    super()
    this.arr = arr
    this.idx = 0
  }

  next() {
    return this.arr[this.idx++]
  }

  isEnd() {
    return this.idx >= this.arr.length
  }
}

class RangeSeq extends Sequence {
  constructor(from, to) {
    super()
    this.from = from
    this.to = to
    this.current = from
  }

  next() {
    return this.current++
  }

  isEnd() {
    return this.current > this.to
  }
}


function logFive(seq) {
  for (let i = 0; i < 5 && !seq.isEnd(); i++) {
    console.log(seq.next())
  }
}

logFive(new ArraySeq([1, 2]))
logFive(new RangeSeq(100, 104))
