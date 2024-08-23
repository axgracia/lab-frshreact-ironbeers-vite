import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log(response.data); // Log the response data to visualize the structure
        setBeers(response.data);
      })
      .catch((error) => console.error("Error fetching beers:", error));
  }, []);

  return (
    <div>
      <h2>All Beers</h2>
      <ul>
        {beers.map((beer) => (
          <li key={beer._id}>
            <img src={beer.image_url} alt={beer.name} style={{ height: "100px" }} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`}>More Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllBeersPage;
