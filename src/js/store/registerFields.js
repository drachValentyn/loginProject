import api from "../services/apiService";
import { formatDate } from "../helpers/date";

class Locations {
  constructor(helpers) {
    this.api = api;
    this.countries = null;
    this.cities = null;
    this.shortCities = {};
    this.formatDate = helpers.formatDate;
  }
  async init() {
    const response = await Promise.all([
      this.api.countries(),
      // this.api.cities(),
    ]);

    // console.log(response);
    const countries = response;
    this.countries = this.serializeCountries(countries);

    return response;
  }

  getCounrty() {
    console.log(this.countries);
    return this.countries;
  }

  getCity() {
    this.cities = this.serializeCities(cities);
    this.shortCities = this.createShortCities(this.cities);
  }

  getCityCodeByKey(key) {
    const city = Object.values(this.cities).find(
      (item) => item.full_name === key
    );
    return city.code;
  }

  getCityNameByCode(code) {
    return this.cities[code].name;
  }

  createShortCities(cities) {
    return Object.entries(cities).reduce((acc, [, city]) => {
      acc[city.full_name] = null;
      return acc;
    }, {});
  }

  serializeCountries(countries) {
    const obj = countries.reduce((acc, country) => {
      acc = country;
      return acc;
    }, {});

    const keys = Object.values(obj)

    return keys;

    // return countries.reduce((acc, country) => {
    //   acc = country;
    //   return acc;
    // }, {});
  }

  serializeCities(cities) {
    return cities.reduce((acc, city) => {
      const country_name = this.countries[city.country_code].name;
      city.name = city.name || city.name_translations.en;
      const full_name = `${city.name}, ${country_name}`;
      acc[city.code] = {
        ...city,
        country_name,
        full_name,
      };
      return acc;
    }, {});
  }
}

const locations = new Locations(api, { formatDate });

export default locations;
