import { CDN_URL } from "../utils/common";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={CDN_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Cart</li>
            <li>Account</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;