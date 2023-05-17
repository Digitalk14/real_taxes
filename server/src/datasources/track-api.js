const { RESTDataSource } = require("@apollo/datasource-rest");

class TrackAPI extends RESTDataSource {
  // the Catstronauts catalog is hosted on this server
  baseURL = "http://127.0.0.1:5000/api/";

  getTaxes() {
    return this.get("get-taxes");
  }
  getCountryTaxes(countryId) {
    return this.get(`get-taxes/${countryId}`)
  }

  // getAuthor(authorId) {
  //   return this.get(`author/${authorId}`);
  // }

  // getTrack(trackId) {
  //   return this.get(`track/${trackId}`);
  // }

  // getTrackModules(trackId) {
  //   return this.get(`track/${trackId}/modules`);
  // }

  // getModule(moduleId) {
  //   return this.get(`module/${moduleId}`);
  // }

  // incrementTrackViews(trackId) {
  //   return this.patch(`track/${trackId}/numberOfViews`);
  // }
}

module.exports = TrackAPI;
