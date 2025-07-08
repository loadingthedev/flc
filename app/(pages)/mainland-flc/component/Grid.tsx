import { FaGlobe } from "react-icons/fa";

export default function Steps() {
  return (
    <div className="mt-20">
      <div className="bg-white p-6  rounded text-center flex flex-col items-center  max-w-6xl mx-auto">
        <FaGlobe color="red" size={"50"} />
        <h2 className="text-3xl font-bold mb-4 mt-8 text-center text-primary">
          The FLCfit Licence Includes
        </h2>
        <p className="text-center text-primary text-xl mb-8">
          Remove the barriers and operate freely from your clients’ residences,
          at licensed premises such as <br /> hotels, gyms, sports facilities
          and health clubs, as well as public areas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10 font-bold text-[#0f5471] my-16">
          {[
            "ONE 3-YEAR PARTNER VISA (INCLUDES EMIRATES ID AND MEDICAL)",
            "ESTABLISHMENT CARD",
            "CO-WORKING OFFICE SPACE",
            "ALL GOVERNMENT APPROVALS",
            "INTRODUCTION TO BANKS FOR CORPORATE ACCOUNT OPENING",
            "LOCAL SPONSOR FEES",
            "NOTARY PUBLIC FEES",
            "DED LICENCE FEE",
            "ALL PRO FEES",
          ].map((text, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-xl rounded text-center flex flex-col items-center  w-full"
            >
              <p className="mt-8">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
