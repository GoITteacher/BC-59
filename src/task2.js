/* 
Каталог товарів: Створіть каталог товарів, де кожен 
товар буде об'єктом з властивостями назва, ціна та 
кількість. Додайте методи для додавання товару, видалення 
товару та підрахунку загальної вартості.
*/

const store = {
  products: [],
  addProduct(name, price, amount) {
    this.products.push({ name, price, amount });
  },
  sumProduct() {
    let sum = 0;
    for (let product of this.products) {
      sum += product.price * product.amount;
    }
    return sum;
  },
};

store.addProduct('rsn', 2, 50);
store.addProduct('ffj', 2, 25);
store.addProduct('mouse', 2, 100);

console.log(store.sumProduct());
