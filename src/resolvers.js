module.exports = {
  Query: {
    products: async (_, { mainCat, subCat }, { db }) => {
      try {
        const result = await db.query(
          `SELECT * FROM products WHERE product_category='${mainCat}>${subCat}'`
        );
        return result.rows;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
