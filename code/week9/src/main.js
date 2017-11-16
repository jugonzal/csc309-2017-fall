class Shape {
  constructor(id, x, y) {
    this.id = id;
    this.move(x, y);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
  get xCoord() {
    return this.x;
  }
  get yCoord() { return this.y; }
}
class Rectangle extends Shape {
  constructor(id, x, y, width, height) {
    super(id, x, y);
    this.width = width;
    this.height = height;
  }
}
const square = new Rectangle('Alpha', 5, 5, 50, 50);
square.move(10, 10);

module.exports = Rectangle;
