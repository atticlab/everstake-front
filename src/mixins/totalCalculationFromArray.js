export const totalCalculationFromArray = {
  methods: {
    $_calcTotalFromArray(arr) {
      if (!(arr && arr)) return 0;

      return arr.reduce((acc, currObj) => {
        acc += currObj.value;
        return acc;
      }, 0);
    },
  },
};
