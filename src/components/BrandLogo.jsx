import { BRAND } from "../config/brand";

function BrandLogo({ dark = false, className = "" }) {
  const logo = dark
    ? BRAND.assets.logoDark
    : BRAND.assets.logo;

  return (
    <img
      src={logo}
      alt={BRAND.name}
      className={className}
    />
  );
}

export default BrandLogo;
