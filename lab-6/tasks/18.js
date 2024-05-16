
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vec) {
    return new Vector(this.x + vec.x, this.y + vec.y);
  }

  minus(vec) {
    return new Vector(this.x - vec.x, this.y - vec.y);
  }
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)));