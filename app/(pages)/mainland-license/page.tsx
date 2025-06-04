import Business from "./components/BusinessActivities";
import Guide from "./components/Guide";
import Header from "./components/Header";

export default function page() {
  return (
    <div>
      <Header />
      <Business />
      <Guide />
    </div>
  );
}
