let calculator = {
  read(num1, num2) {
    this.number1 = num1;
    this.number2 = num2;
  },

  sum() {
    return this.number1 + this.number2;
  },

  mul() {
    return this.number1 * this.number2;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
