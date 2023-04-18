import { Link } from "react-router-dom";
import './header.css'

// TODO: insert navbar/links to other pages, smt like https://react-bootstrap.github.io/components/navbar/
function Header() {
    return (
      <div className='header'>
        <div className="top">
          <div className="titles">
            <div className="nav-brand">NOVA</div>
            <span className="subtext">NIST CSF Education and Management Tool</span>
          </div>
          <button className="login-button">Login</button>
        </div>
        <div className="bottom">
          <div className="nav-buttons">
            <Link to="/chatbot" className="nav-button">CHATBOT</Link>
            <Link to="/significance" className="nav-button">SIGNIFICANCE</Link>
            <Link to="/faq" className="nav-button">FAQ</Link>
            <Link to="/Team" className="nav-button">ABOUT US</Link>
          </div>
        </div>
      </div>
    );
}
  
export default Header;