const timeline = [
  { year: "2010", event: "Founded in San Francisco" },
  { year: "2015", event: "Expanded to 25 countries" },
  { year: "2020", event: "Reached 1 million members" },
  { year: "2023", event: "Launched innovative programs" },
];

const TimelineSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
          Our Journey
        </h2>
        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="flex mb-12 relative hover:transform hover:translate-x-2 transition-transform duration-300"
            >
              <div className="w-32 flex-shrink-0 text-right pr-8">
                <span className="font-bold text-xl text-accent">
                  {item.year}
                </span>
              </div>
              <div className="w-px bg-accent relative">
                <div className="absolute w-4 h-4 bg-accent rounded-full -left-2 ring-4 ring-accent/30" />
              </div>
              <div className="flex-grow pl-8 pb-8">
                <p className="text-foreground text-lg font-medium">
                  {item.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
