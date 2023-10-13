// базовый класс Shape
class Shape {
  constructor() {
    // конструктор базового класса Shape
  }

  // абстрактные методы для расчета площади и периметра
  calculateArea() {
    throw new Error("Подклассы должны реализовывать метод calculateArea");
  }

  calculatePerimeter() {
    throw new Error("Подклассы должны реализовать метод calculatePerimeter");
  }
}

// подкласс Rectangle (прямоугольник)
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

// подкласс Circle (круг)
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }

  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

// подкласс Triangle (треугольник)
class Triangle extends Shape {
    constructor(side1, side2, side3) {
      super();
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    }
  
    calculateArea() {
      // Используем формулу Герона для расчета площади треугольника по длинам сторон
      const s = (this.side1 + this.side2 + this.side3) / 2; // полупериметр
      const area = Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
      return area;
    }
  
    calculatePerimeter() {
      return this.side1 + this.side2 + this.side3;
    }
  }

const rectangle = new Rectangle(6, 9);
console.log("Площадь прямоугольника:", rectangle.calculateArea()); // результат: 54
console.log("Периметр прямоугольника:", rectangle.calculatePerimeter()); // результат: 30

const circle = new Circle(4);
console.log("Площадь круга:", circle.calculateArea()); // результат: 50.26548245743669
console.log("Периметр круга:", circle.calculatePerimeter()); // результат: 25.132741228718345

const triangle = new Triangle(5, 11, 15);
console.log("Triangle Area:", triangle.calculateArea()); // результат: 19.13602623325961
console.log("Triangle Perimeter:", triangle.calculatePerimeter()); // результат: 31
