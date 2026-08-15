import { BRAND } from "./brand";

export const applyTheme = () => {
  const root = document.documentElement;

  // Colors
  root.style.setProperty("--color-primary", BRAND.colors.primary);
  root.style.setProperty("--color-secondary", BRAND.colors.secondary);
  root.style.setProperty("--color-accent", BRAND.colors.accent);
  root.style.setProperty("--color-text", BRAND.colors.text);
  root.style.setProperty("--color-background", BRAND.colors.background);

  // Fonts
  root.style.setProperty("--font-heading", BRAND.fonts.heading);
  root.style.setProperty("--font-body", BRAND.fonts.body);
};
