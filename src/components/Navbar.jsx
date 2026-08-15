import BrandLogo from "./BrandLogo";
import { BRAND } from "../config/brand";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <BrandLogo className="navbar__logo" />

        <span className="navbar__name">
          {BRAND.name}
        </span>
      </div>

      <nav className="navbar__links">
        <a href="/">Menu</a>
        <a href="/orders">Orders</a>
        <a href="/profile">Profile</a>
      </nav>
    </header>
  );
}

export default Navbar;
