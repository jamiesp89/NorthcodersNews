import { Link } from "react-router-dom";

export default function HomeLink() {
  return (
    <div>
      <Link to={"/"}>
        <div className="homeLink">Northcoders News</div>
      </Link>
    </div>
  );
}
