export default {
  getNumberBySize: function (size = 1) {
    const
      min = Math.pow(10, size - 1),
      max = Math.pow(10, size) - 1;

    let rand = this.getRandomNumber(min, max);
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
