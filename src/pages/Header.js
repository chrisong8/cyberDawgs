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
            <button className="nav-button">CHATBOT</button>
            <button className="nav-button">SIGNIFICANCE</button>
            <button className="nav-button">FAQ</button>
            <button className="nav-button">ABOUT US</button>
          </div>
        </div>
      </div>
    );
}
  
export default Header;