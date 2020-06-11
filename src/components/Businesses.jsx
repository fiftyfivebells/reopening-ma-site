import React from "react";

const carWash = require("../assets/json/business/car_wash.json");
const closePersonal = require("../assets/json/business/close_contact_personal_services.json");
const construction = require("../assets/json/business/construction.json");
const drivingFlight = require("../assets/json/business/driving_and_flight_schools.json");
const general = require("../assets/json/business/general.json");
const golf = require("../assets/json/business/golf_facilities.json");
const hairSalons = require("../assets/json/business/hair_salons_and_barbershops.json");
const labs = require("../assets/json/business/laboratories.json");
const libraries = require("../assets/json/business/libraries.json");
const lodging = require("../assets/json/business/lodging.json");
const manufacturing = require("../assets/json/business/manufacturing.json");
const offices = require("../assets/json/business/office_spaces.json");
const pets = require("../assets/json/business/pet_grooming.json");
const worship = require("../assets/json/business/places_of_worship.json");
const restaurants = require("../assets/json/business/restaurants.json");
const retail = require("../assets/json/business/retail.json");

class Businesses extends React.Component {
  constructor(props) {
    super(props);

    this.setBusinessInfo = this.setBusinessInfo.bind(this);

    this.state = {
      business: {},
    };
  }

  setBusinessInfo(file) {
    this.setState({ business: file });
  }

  render() {
    return (
      <div>
        <h1>Businesses</h1>
      </div>
    );
  }
}

export default Businesses;
