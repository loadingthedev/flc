import { FaArrowRight } from "react-icons/fa";

const freeZoneAdvantages = [
  {
    logo: "https://go.virtuzone.com/wp-content/uploads/2024/12/dubai-world-trade-centre-vector-logo.svg",
    title: "Dubai World Trade Centre (DWTC) Free Zone",
    description: "Starting from AED 35,000.",
    link: "#",
  },
  {
    logo: "https://go.virtuzone.com/wp-content/uploads/2024/12/cc.png.webp",
    title: "Fujairah Creative City Free zone (FCC)",
    description: "Starting from AED 17,850.",
    link: "#",
  },
  {
    logo: "https://go.virtuzone.com/wp-content/uploads/2024/12/dmcc-1-1.svg",
    title: "Dubai Multi Commodities Centre Free Zone",
    description: "Starting from: 50,000 AED",
    link: "#",
  },

  {
    logo: "https://go.virtuzone.com/wp-content/uploads/2024/12/mobile-rak-logo.svg",
    title: "Ras Al Khaimah Economic Free Zone (RAKEZ)",
    description: "Starting from AED 11,500",
    link: "#",
  },
  {
    logo: "https://go.virtuzone.com/wp-content/uploads/2024/12/logo.svg",
    title: "Ajman Free Zone (AFZ)",
    description: "Starting from AED 11,000.",
    link: "#",
  },
  {
    logo: "https://go.virtuzone.com/wp-content/uploads/2024/12/jafza.png",
    title: "Jebel Ali Free Zone (JAFZA)",
    description: "Starting from AED 50,000",
    link: "#",
  },
  {
    logo: "https://go.virtuzone.com/wp-content/uploads/2024/12/Yo4cnqftF7.png.webp",
    title: "Sharjah Media City Shams Free Zone",
    description: "Starting from AED 11,500",
    link: "#",
  },
  {
    logo: "https://go.virtuzone.com/wp-content/uploads/2024/12/DIFC.png",
    title: "Dubai Multi Commodities Centre Free Zone",
    description: "Starting from AED 36,000",
    link: "#",
  },
  {
    logo: "https://go.virtuzone.com/wp-content/uploads/2024/12/ADGM-Logo.png.webp",
    title: "Abu Dhabi Global Market Free Zone",
    description: "Starting from AED 16,000",
    link: "#",
  },
];

const FreeZoneAdvantages = () => {
  return (
    <div className="max-w-6xl my-30 flex justify-center bg-gray-100 py-8 px-12 rounded-lg shadow-md">
      <div className="max-w-7xl">
        <h2 className="text-3xl font-bold mb-4 mt-8 text-start text-primary">
          Location and Pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20 gap-8">
          {freeZoneAdvantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white p-6  shadow-md rounded text-justify mx-auto flex flex-col justify-between h-full"
              style={{ width: "350px", height: "350px" }}
            >
              <img
                src={advantage.logo}
                alt="Company Logo"
                className="w-28 h-18 mb-2"
              />
              <div className="flex-grow">
                <p className="text-xl text-primary mt-8">{advantage.title}</p>
                <p className="text-justify mt-4">{advantage.description}</p>
              </div>
              <a
                href={advantage.link}
                className="flex gap-2 text-blue-500 hover:underline mt-4 inline-block"
              >
                Get Started <FaArrowRight className="mt-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreeZoneAdvantages;
