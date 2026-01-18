import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h2>সবুজ সঙ্ঘ</h2>
    <nav>
      <div className="links">
      <Link to="/">Home</Link>
      <Link to="/competition">Competition</Link>
      <Link to="/participate">Participate</Link>
      <Link to="/rule">Rules</Link>
      <Link to="/members">Contact</Link>
      <Link to="/winners">New-Update</Link>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
