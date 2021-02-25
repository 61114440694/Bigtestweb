import { Link } from "react-router-dom";

function Header() {
  return (
      <header className="header">
        <div className="brand">
        </div>
        <center>
          <div className="brand" style={{fontSize:"32px"}}>
            <Link to="/">AllBody-Shop</Link>
          </div>
        </center>

        <div className="header-links">
        </div>
      </header>
  );
}

export default Header;
