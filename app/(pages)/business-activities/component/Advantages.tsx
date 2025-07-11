const freeZoneAdvantages = [
  {
    title: "Broadcast Management",
    description:
      "Activities supported include radio broadcasting, TV broadcasting, and web streaming. Authority approval is required and only certain packages support this activity.",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=60", // Broadcasting studio
  },
  {
    title: "Consultancy",
    description:
      "Consultancy covers a wide range of consulting activities including business consultancy, lifestyle consultancy, investment consultancy, legal consultancy, and human resource consultancy.",
    image:
      "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=60", // Consulting meeting
  },
  {
    title: "Education and Training",
    description:
      "A wide range of activities fall under the education and training categories, but please note these are only available under packages with visa eligibility.",
    image:
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=60", // Classroom
  },
  {
    title: "Event Management",
    description:
      "Event management covers many activities, from conference organization to theatre production and more.",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=60", // Event stage
  },
  {
    title: "Film, Production and Post-Production",
    description:
      "This category covers licences for activities including film, art, and video production, as well as post-production.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=60", // Film production
  },
  {
    title: "Industrial",
    description:
      "Industrial licences cover manufacturing and the processing of raw goods. These activities often coincide with warehousing requirements.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", // Factory
  },
  {
    title: "IT Services",
    description:
      "IT services covers a range of activities within the information and communications technology sector, including e-commerce.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=60", // IT workspace
  },
  {
    title: "Media and Marketing Services",
    description:
      "This category covers an array of activities including advertising, public relations, research, and much more.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=60", // Marketing
  },
  {
    title: "Music and Entertainment",
    description:
      "This specifically relates to music production and recording, music promotion and management, music rights as well as theme parks management.",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=60", // Music studio
  },
  {
    title: "New Media",
    description:
      "New media covers activities such as photography, web design, and broader digital media services including the creation and management of mobile phone applications.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=60", // Digital media
  },
  {
    title: "Publishing",
    description:
      "Activities such as publishing of directories and guides, education and consumer books, magazines, online and electronic content, and much more. Special approval from authorities will be required.",
    image:
      "https://plus.unsplash.com/premium_photo-1677187301660-5e557d9c0724?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8fDA%3D", // Books
  },
  {
    title: "Trading",
    description:
      "Trading activities can be related to any import or export related transactions.",
    image:
      "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?auto=format&fit=crop&w=400&q=60", // Trading containers
  },
];

const FreeZoneAdvantages = () => {
  return (
    <div className="my-30 flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl">
        <h2 className="text-3xl font-bold mb-4 text-center text-primary">
          Advantages of Setting up in a Free Zone
        </h2>
        <p className="text-xl mb-8 text-center text-primary">
          What are the main benefits to starting your company in a free zone and
          how do they each operate?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-20">
          {freeZoneAdvantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md rounded text-justify max-w-lg mx-auto"
            >
              <img
                src={advantage.image}
                alt={advantage.title}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-xl text-primary font-bold">
                {advantage.title}
              </p>
              <p className="text-justify mt-8">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreeZoneAdvantages;
