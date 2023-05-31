const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    getTaxes: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTaxes();
    },

    getCountryTaxes: (_, {id}, {dataSources}) => {
      return dataSources.trackAPI.getCountryTaxes(id)
    },
    getCountriesTaxes: (_, __, {dataSources}) => {
      return dataSources.trackAPI.getCountriesTaxes();
    },
    getCurrency: (_, __, {dataSources}) => {
      return dataSources.trackAPI.getCurrency();
    }
  },
};

module.exports = resolvers;
