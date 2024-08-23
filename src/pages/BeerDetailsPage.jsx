// src/pages/BeerDetailsPage.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        console.log(response.data); // Log the response data to visualize the structure
        setBeer(response.data);
      })
      .catch((error) => console.error("Error fetching beer details:", error));
  }, [beerId]);

  if (!beer) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={beer.image_url} alt={beer.name} style={{ height: "200px" }} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p><strong>First brewed:</strong> {beer.first_brewed}</p>
      <p><strong>Attenuation level:</strong> {beer.attenuation_level}</p>
      <p><strong>Description:</strong> {beer.description}</p>
      <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
    </div>
  );
}

export default BeerDetailsPage;
