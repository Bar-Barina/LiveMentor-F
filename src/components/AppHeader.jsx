import { Link } from "react-router-dom";

export function AppHeader() {
  return (
    <header className="app-header flex align-center justify-center">
      <Link to="/">
        <div className="flex align-center logo-wrapper">
        <span>Live</span>
        <span className="icon">🧑🏻‍💻</span>
        <span>Mentor</span>
        </div>
      </Link>
    </header>
  );
}
