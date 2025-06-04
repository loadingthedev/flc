import Business from "./component/Business";
import Guide from "./component/Guide";
import Header from "./component/Header";

export default function page() {
  return (
    <div>
      <Header />
      <Business />
      <Guide />
    </div>
  );
}
