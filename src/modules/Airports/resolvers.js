const model = require("./model");
module.exports = {
  Query: {
    airports: async () => {
      return await model.airports();
    },
    reyses: async (_, { airport_id }) => {
      console.log(airport_id);

      return await model.reyses();
    },
  },
  // Airports: {
  //   airport_id: (global) => global.airport_id,
  //   airport_name: (global) => global.airport_name,
  //   airport_location: (global) => global.airport_location,
  // },
};
