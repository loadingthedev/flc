import { BsArrowRight } from "react-icons/bs";

const IndustriesTable = () => {
  const Industries = [
    {
      id: 1,
      area: "Banking & Financial Management",
    },
    {
      id: 2,
      area: "Consumer Goods & Commerce",
    },
    {
      id: 3,
      area: "Energy & Natural Resources",
    },
    {
      id: 4,
      area: "Healthcare & Life Sciences",
    },
    {
      id: 5,
      area: "Industrial Manufacturing",
    },
    {
      id: 6,
      area: "Media & Entertainment",
    },
    {
      id: 7,
      area: "Startups & Emerging Companies",
    },
    {
      id: 8,
      area: "Technology Industry",
    },
  ];

  return (
    <div className="w-full bg-card p-6 rounded-md shadow-md">
      <h2 className="text-4xl font-heading text-foreground font-bold mb-12">
        Industries
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Industries.map((area) => (
          //  <Link href={`/practice-areas/${area.id}`} key={area.id}></Link>
          <div>
            <div className="p-6 bg-[#e1dfde] shadow-sm hover:shadow-md transition-shadow duration-300 relative group flex justify-between items-center">
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent">
                {area.area}
              </h3>
              <BsArrowRight className="text-primary text-xl group-hover:text-accent transition-colors duration-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesTable;
