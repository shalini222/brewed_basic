import { BRAND } from "../config/brand";

function BrandLogo({ dark = false, className = "", ...props }) {
  const logo = dark
    ? BRAND.assets.logoDark
    : BRAND.assets.logo;

  return (
    <img
      src={logo}
      alt={BRAND.name}
      className={className}
      {...props}
    />
  );
}

export default BrandLogo;
