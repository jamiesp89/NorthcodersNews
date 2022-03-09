import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to={"/"}>
        <div className="homeButton">Northcoders News</div>
      </Link>
    </div>
  );
}
