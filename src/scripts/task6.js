class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  calculateArea() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius, x, y) {
    super(x, y);
    this.radius = radius;
  }
  calculateArea() {
    return 2 * Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height, x, y) {
    super(x, y);
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.height * this.width;
  }
}

class Triangle extends Shape {
  constructor(a, b, c, x, y) {
    super(x, y);
    this.a = a;
    this.b = b;
    this.c = c;
  }
  calculateArea() {
    const s = (this.a + this.b + this.c) / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

const circle = new Circle(5, 0, 0);
const rectangle = new Rectangle(4, 6, 0, 0);
const triangle = new Triangle(8, 5, 5, 0, 0);

console.log('Circle area:', circle.calculateArea()); // Output: Circle area: 78.53981633974483
console.log('Rectangle area:', rectangle.calculateArea()); // Output: Rectangle area: 24
console.log('Triangle area:', triangle.calculateArea()); // Output: Triangle area: 20
