const { RESTDataSource } = require("@apollo/datasource-rest");

class TrackAPI extends RESTDataSource {
  // the Catstronauts catalog is hosted on this server
  baseURL = "http://127.0.0.1:5000/api/";

  getTaxes() {
    return this.get("get-taxes");
  }
  getCountryTaxes(countryId) {
    return this.get(`get-taxes/${countryId}`);
  }
  getCountriesTaxes() {
    return this.get(`get-countries-taxes`);
  }
  getCurrency() {
    return this.get("get-currency");
  }
}

module.exports = TrackAPI;
