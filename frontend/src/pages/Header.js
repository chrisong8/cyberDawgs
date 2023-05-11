import { Link } from "react-router-dom";
import './header.css'

// header/nav bar
function Header() {
    return (
      <div className='header'>
        <div className="iconTop">
          <div >
            <img className="icon"src="/pics/NOVAFINAL.jpg" alt="description of image"></img>
          </div>
          <div className="top">
            <div className="titles">
              <div className="nav-brand">NOVA</div>
              <div className="nav-subtext">NIST CSF Education and Management Tool</div>
            </div>
          </div>
        </div>
        
        <div className="bottom">
          <div className="nav-buttons">
            <Link to="/Team" className="nav-button">HOME</Link>
            <Link to="/chatbot" className="nav-button">CHATBOT</Link>
            <Link to="/faq" className="nav-button">FAQ</Link>
          </div>
        </div>
      </div>
    );
}
  
export default Header;