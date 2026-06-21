import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">الرئيسية</Link>

      {" | "}

      <Link to="/products">المنتجات</Link>
    </nav>
  );
}

export default Navbar;