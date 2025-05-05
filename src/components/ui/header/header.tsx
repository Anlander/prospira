import { getThemeSettings } from "@/lib/actions/get-theme-settings";
import { Navigation } from "./navigation";

export const Header = async () => {
  const settings = await getThemeSettings();
  return <Navigation props={settings.content} />;
};
