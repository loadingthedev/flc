import AdminForm from "../../app/(pages)/admin/accounting-service/components/business";
import {
  default as Header,
  default as Hero,
} from "../../app/(pages)/admin/accounting-service/components/Hero";

const Main = () => {
  return (
    <div>
      <Hero />
      <Header />
      <AdminForm />
    </div>
  );
};
export default Main;
