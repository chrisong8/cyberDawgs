import { Link } from "react-router-dom";
import './header.css'

// header/nav bar
function Header() {
    return (
      <div className='header'>
        <div className="top">
          <div className="titles">
            <div className="nav-brand">NOVA</div>
            <div className="nav-subtext">NIST CSF Education and Management Tool</div>
          </div>
          <Link to ="/login" className="login-button">Login</Link>
        </div>
        <div className="bottom">
          <div className="nav-buttons">
            <Link to="/chatbot" className="nav-button">CHATBOT</Link>
            <Link to="/faq" className="nav-button">FAQ</Link>
            <Link to="/Team" className="nav-button">ABOUT US</Link>
          </div>
        </div>
      </div>
    );
}
  
export default Header;