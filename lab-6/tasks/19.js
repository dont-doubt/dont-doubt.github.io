
class StretchCell {
  constructor(inner, width, height) {
    this.inner = inner
    this.width = width
    this.height = height
  }

  minWidth() {
    return Math.max(this.width, this.inner.minWidth())
  }

  minHeight() {
    return Math.max(this.height, this.inner.minHeight())
  }

  draw(width, height) {
    return this.inner.draw(width, height)
  }
}

class TextCell {
  constructor(text) {
    this.text = text.split('\n')
  }

  minWidth() {
    return this.text.reduce(function (width, line) {
      return Math.max(width, line.length)
    }, 0)
  }

  minHeight() {
    return this.text.length
  }

  draw(width, height) {
    const result = []
    for (let i = 0; i < height; i++) {
      const line = this.text[i] || ''
      result.push(line + " ".repeat(width - line.length))
    }
    return result
  }
}

const cell = new StretchCell(new TextCell("abc"), 1, 2)
console.log(cell.minWidth())
console.log(cell.minHeight())
console.log(cell.draw(3, 2))