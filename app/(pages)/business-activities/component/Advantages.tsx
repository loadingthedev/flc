const freeZoneAdvantages = [
  {
    title: "Broadcast Management",
    description:
      "Activities supported include radio broadcasting, TV broadcasting, and web streaming. Authority approval is required and only certain packages support this activity.",
    image: "/path/to/image1.jpg",
  },
  {
    title: "Consultancy",
    description:
      "Consultancy covers a wide range of consulting activities including business consultancy, lifestyle consultancy, investment consultancy, legal consultancy, and human resource consultancy.",
    image: "/path/to/image2.jpg",
  },
  {
    title: "Education and Training",
    description:
      "A wide range of activities fall under the education and training categories, but please note these are only available under packages with visa eligibility.",
    image: "/path/to/image3.jpg",
  },
  {
    title: "Event Management",
    description:
      "Event management covers many activities, from conference organization to theatre production and more.",
    image: "/path/to/image4.jpg",
  },
  {
    title: "Film, Production and Post-Production",
    description:
      "This category covers licences for activities including film, art, and video production, as well as post-production.",
    image: "/path/to/image4.jpg",
  },
  {
    title: "Industrial",
    description:
      "Industrial licences cover manufacturing and the processing of raw goods. These activities often coincide with warehousing requirements.",
    image: "/path/to/image4.jpg",
  },
  {
    title: "IT Services",
    description:
      "IT services covers a range of activities within the information and communications technology sector, including e-commerce.",
    image: "/path/to/image4.jpg",
  },
  {
    title: "Media and Marketing Services",
    description:
      "This category covers an array of activities including advertising, public relations, research, and much more.",
    image: "/path/to/image4.jpg",
  },
  {
    title: "Music and Entertainment",
    description:
      "This specifically relates to music production and recording, music promotion and management, music rights as well as theme parks management.",
    image: "/path/to/image4.jpg",
  },
  {
    title: "New Media",
    description:
      "New media covers activities such as photography, web design, and broader digital media services including the creation and management of mobile phone applications.",
    image: "/path/to/image4.jpg",
  },
  {
    title: "Publishing",
    description:
      "Activities such as publishing of directories and guides, education and consumer books, magazines, online and electronic content, and much more. Special approval from authorities will be required.",
    image:
      "https://plus.unsplash.com/premium_photo-1677187301660-5e557d9c0724?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Trading",
    description:
      "Trading activities can be related to any import or export related transactions.",
    image: "/path/to/image4.jpg",
  },
];

const FreeZoneAdvantages = () => {
  return (
    <div className="my-30 flex justify-center">
      <div className="max-w-7xl">
        <h2 className="text-3xl font-bold mb-4 text-center text-primary">
          Advantages of Setting up in a Free Zone
        </h2>
        <p className="text-xl mb-8 text-center text-primary">
          What are the main benefits to starting your company in a free zone and
          how do they each operate?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-20">
          {freeZoneAdvantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md rounded text-justify max-w-lg max-h-md mx-auto"
            >
              <img
                src={advantage.image}
                alt={advantage.title}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-2xl text-primary font-bold">
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
