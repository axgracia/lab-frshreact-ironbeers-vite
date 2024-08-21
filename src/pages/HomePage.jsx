import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h2>Welcome to IronBeers</h2>
      <nav>
        <ul>
          <li>
            <Link to="/beers">All Beers</Link>
          </li>
          <li>
            <Link to="/random-beer">Random Beer</Link>
          </li>
          <li>
            <Link to="/new-beer">New Beer</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;