import { Link } from "react-router-dom";
import LMlogo from "../assets/imgs/LMlogo.png";

export function AppHeader() {
  return (
    <header className="app-header flex align-center justify-center">
      <Link to="/">
        <img src={LMlogo} alt="LiveMentor Logo" />
      </Link>
    </header>
  );
}
