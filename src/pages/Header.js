// black header/nav bar
import { Link } from "react-router-dom";
const navigate = useNavigate();

function Header() {
    return (
      <div className='header'>
      <div className='title'>
          <p>NOVA</p>
      </div>
      <div className=''>
              <button>
              Login
              </button>
      </div>
    </div>
    );
}
  
export default Header;