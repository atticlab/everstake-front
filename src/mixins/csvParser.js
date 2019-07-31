export const csvParser = {
  methods: {
    $_parseCsv(csv) {
      const res = csv.data.split('\n');
      return res.map((item) => {
        const trimmedItem = item.trim();
        return {
          date: trimmedItem.split(',')[0],
          value: Number(trimmedItem.split(',')[1]),
        };
      });
    },
  },
};
