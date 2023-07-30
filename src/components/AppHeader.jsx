import { Link } from "react-router-dom";

export function AppHeader() {
  return (
    <header className="app-header flex align-center justify-center">
      <Link to="/">
        <div className="flex align-center logo-wrapper">
        <span>Live</span>
        <img src="https://i.pinimg.com/originals/d5/8f/47/d58f477d09240220754bd51b51c7b6d2.png" alt="LiveMentor Logo" />
        <span>Mentor</span>
        </div>
      </Link>
    </header>
  );
}
