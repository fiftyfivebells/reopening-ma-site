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
        <p>
          Click a button below for more information on the specific industry:
        </p>
        <div class="button-container">
          <button onClick={() => this.setBusinessInfo(carWash)}>
            Car Washes
          </button>
          <button onClick={() => this.setBusinessInfo(closePersonal)}>
            Close Contact Services
          </button>
          <button onClick={() => this.setBusinessInfo(construction)}>
            Construction
          </button>
          <button onClick={() => this.setBusinessInfo(drivingFlight)}>
            Driving and Flight Schools
          </button>
          <button onClick={() => this.setBusinessInfo(general)}>
            General Business Info
          </button>
          <button onClick={() => this.setBusinessInfo(golf)}>
            Golf Facilities
          </button>
          <button onClick={() => this.setBusinessInfo(hairSalons)}>
            Hair Salons/Barbershops
          </button>
          <button onClick={() => this.setBusinessInfo(labs)}>
            Laboratories
          </button>
          <button onClick={() => this.setBusinessInfo(libraries)}>
            Libraries
          </button>
          <button onClick={() => this.setBusinessInfo(lodging)}>Lodging</button>
          <button onClick={() => this.setBusinessInfo(manufacturing)}>
            Manufacturing
          </button>
          <button onClick={() => this.setBusinessInfo(offices)}>
            Office Spaces
          </button>
          <button onClick={() => this.setBusinessInfo(pets)}>
            Pet Grooming
          </button>
          <button onClick={() => this.setBusinessInfo(worship)}>
            Places of Worship
          </button>
          <button onClick={() => this.setBusinessInfo(restaurants)}>
            Restaurants
          </button>
          <button onClick={() => this.setBusinessInfo(retail)}>Retail</button>
        </div>
        <br />
        <br />
        <Business business={this.state.business} />
      </div>
    );
  }
}

export default Businesses;
