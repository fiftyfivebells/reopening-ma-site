import React from "react";
import ListItem from "./ListItem";

import "../assets/styles/components.css";

const industries = [
  "Essential Businesses",
  "Banks",
  "Financial Services",
  "In house services (nannies, babysitting, etc.)",
  "Real Estate Open Houses",
  "Construction",
  "Firearm Retailers & Shooting Ranges",
  "Home Remodeling",
  "In-home Installations",
  "Manufacturing",
  "Places of Worship",
  "Auto Dealers and Wholesalers (browsing in showroom with restrictions)",
  "Car Washes",
  "Drive-in Movie Theaters",
  "Hair Salons/Barbershops",
  "General Office Spaces",
  "Lab Space",
  "Libraries (curbside pickup and delivery only)",
  "Pet Grooming",
  "Retail Stores (curbside pickup/deliver, browsing in store with restrictions)",
  "Driving Schools (behind the wheel training)",
  "Hotes/Motels/Short term lodging (for essential workers and vulnerable populations)",
  "Personal Services (no close contact, like photography or career coaching)",
  "Restaurants (takeout/delivery, outdoor seating)",
  "Flight Schools",
  "Beer Gardens/Breweries/Distilleries/Wineries (only if providing seated food service outdoors)",
  "Non-athletic Instructional Classes in arts/education/life skills (youths under 18 in groups fewer than 10)",
  "Funeral Homes",
  "Warehouses and Distribution Centers",
  "Fraternal Orders (only if providing seated service of food prepared on-site with appropriate permit, and only outdoor seating)",
];

const outdoor = [
  "Beaches",
  "Golf",
  "Golf facilities including driving ranges",
  "Parks",
  "Fishing/Hunting/Boating",
  "Outdoor adventure activities (zip-lines, mountain biking, etc.)",
  "Outdoor gardens, zoos, reserves, and public installations",
  "Recreational day camps (including sports and arts)",
  "Limited organized youth and adult amateur sports programs and activites (outdoor only for adults, limited indoor for supervised youth activities)",
  "Professional sports practice and training",
  "Outdoor historical sites",
  "Outdoor fitness classes",
];

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="flex-parent">
        <h1>Organized Notes on Reopening MA</h1>
        <p>
          Click on one of the links to the side to learn more about the
          Massachusetts reopening efforts
        </p>
        <br />
        <br />
        <h3>The following industries are currently allowed to open:</h3>
        <div class="list-container">
          {industries.map((item) => (
            <ListItem statement={item} />
          ))}
        </div>
        <h3>
          The following outdoor recreational activies are currently allowed:
        </h3>
        <div class="list-container">
          {outdoor.map((item) => (
            <ListItem statement={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
