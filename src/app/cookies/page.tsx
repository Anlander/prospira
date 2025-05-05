import dynamic from "next/dynamic";

const CookieConsent = dynamic(() => import("../../components/cookie-consent"), {
  ssr: false,
});
const Cookies = () => {
  return (
    <div>
      <CookieConsent />;
    </div>
  );
};

export default Cookies;
