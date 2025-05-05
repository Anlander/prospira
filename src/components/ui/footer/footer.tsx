import { getThemeSettings } from "@/lib/actions/get-theme-settings";
import { FooterSection } from "./footer-section";

export const Footer = async () => {
  const settings = await getThemeSettings();
  return <FooterSection props={settings.content} />;
};
