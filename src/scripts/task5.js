class Product {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  productDescription() {
    console.log(`Brand: ${this.brand}`);
    console.log(`Model: ${this.model}`);
    console.log(`Price: ${this.price}`);
  }
}

class Smartphone extends Product {
  constructor(brand, model, price, dpi) {
    super(brand, model, price);
    this.dpi = dpi;
  }
  productDescription() {
    console.log(`Brand: ${this.brand}`);
    console.log(`Model: ${this.model}`);
    console.log(`Price: ${this.price}`);
    console.log(`DPI: ${this.dpi}`);
  }
}
class Laptop extends Product {
  constructor(brand, model, price, processor) {
    super(brand, model, price);
    this.processor = processor;
  }
  productDescription() {
    console.log(`Brand: ${this.brand}`);
    console.log(`Model: ${this.model}`);
    console.log(`Price: ${this.price}`);
    console.log(`Processor: ${this.processor}`);
  }
}
class Headphones extends Product {
  constructor(brand, model, price, typeConnect) {
    super(brand, model, price);
    this.typeConnect = typeConnect;
  }
  productDescription() {
    console.log(`Brand: ${this.brand}`);
    console.log(`Model: ${this.model}`);
    console.log(`Price: ${this.price}`);
    console.log(`Type connect: ${this.typeConnect}`);
  }
}

const smartphone = new Smartphone('Apple', 'iPhone 13', 999, '1920x1080');
const laptop = new Laptop('Dell', 'XPS 15', 1499, 'Intel Core i7');
const headphones = new Headphones('Sony', 'WH-1000XM4', 349, 'Bluetooth');

smartphone.productDescription();
laptop.productDescription();
headphones.productDescription();
