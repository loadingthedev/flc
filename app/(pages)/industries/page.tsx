"use client";
import Cta from "../shared/Cta";
import Heading from "../shared/Heading";
import Search from "../shared/Search";
import IndustriesTable from "./component/IndustriesCard";

export default function page() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="   max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Heading
          title="INDUSTRIES"
          subtitle=""
          paragraph="The depth and experience of our team across multiple industries is why we are a top choice for clients facing their most difficult and complex legal issues."
          subparagraph="You can search our legal services by industry when adjusting the filter to ‘Industries’ and ‘Location’ using the dropdown below."
        />
        <Search
          handleSearch={(query) => console.log(query)}
          handleExpertiseChange={(area) => console.log(area)}
        />
        <IndustriesTable />
        <Cta />
      </div>
    </div>
  );
}
