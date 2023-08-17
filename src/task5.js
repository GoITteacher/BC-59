const calc = {
  currentValue: 0,
  history: [],
  plus(x) {
    this.addOperation(this.currentValue, x, '+');
    this.currentValue = this.currentValue + x;
  },
  minus(x) {
    this.addOperation(this.currentValue, x, '-');
    this.currentValue -= x;
  },
  multiply(x) {
    this.addOperation(this.currentValue, x, '*');
    this.currentValue *= x;
  },
  divide(x) {
    this.addOperation(this.currentValue, x, '/');
    this.currentValue /= x;
  },
  showCurrentValue() {
    console.log(this.currentValue);
  },
  showHistory() {
    console.log(this.history);
  },
  addOperation(currentValue, x, type) {
    const result = {
      value: currentValue,
      x,
      type,
      result: `${currentValue} ${type} ${x}`,
    };
    this.history.push(result);
  },
  cancel() {
    this.currentValue = 0;
    this.history = [];
  },
};

calc.minus(5);
calc.plus(10);
calc.multiply(3);
calc.minus(5);
calc.showHistory();
calc.cancel();
calc.multiply(3);
calc.plus(10);
calc.showCurrentValue();
calc.showHistory();
