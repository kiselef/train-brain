export default {
  /**
   * Возвращает число определенной размерности. Если указано relatedMaxValue, то
   *   - либо в рандомном порядке возвращается отрицательное/положительное число,
   *     но чтобы разность чисел не была меньше relatedMaxValue
   *     (чтобы итоговое число не было отрицательным, потому что человек еще не проходил отрицательные числа :))
   *   - либо, если оно указано как "-1", то вернуться может как положительное число, так и отрицательное, той же размерности,
   *     вне зависимости от того, получится результат отрицательным или нет
   *     (это нужно, если человек знает, что такое отрицательные числа :))
   *
   * @param size
   * @param relatedMaxValue
   * @returns {*|number}
   */
  getNumberBySize: function (size = 1, relatedMaxValue = 0) {
    const min = Math.pow(10, size - 1);
    let   max = Math.pow(10, size) - 1;
    // кинем монетку
    const coinSide = Math.round(Math.random());

    let rand = 0;
    if (relatedMaxValue === 0) {
      rand = this.getRandomNumber(min, max);
    } else {
      // то монетка решает, будет ли генерируемое число зависеть от related-числа и отрицательное ли оно будет
      if (relatedMaxValue > 1 && coinSide) {
        max = relatedMaxValue;
      }
      rand = this.getRandomNumber(min, max);
      if (coinSide) {
        rand = -rand;
      }
    }

    // числа должны быть без нуля на конце
    if (rand % 10 === 0) {
      rand += this.getRandomNumber(1, 9);
    }

    return rand;
  },

  getRandomNumber: (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  },
};
