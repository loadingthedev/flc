import Business from "./components/business";
import MailManagementComponent from "./components/header";
import Hero from "./components/hero";

const Mail = () => {
  return (
    <div>
      <Hero />
      <MailManagementComponent />
      <Business />
    </div>
  );
};

export default Mail;
