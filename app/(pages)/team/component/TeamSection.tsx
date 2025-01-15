import React from "react";
import TeamMemberCard from "./TeamMemberCard";

interface TeamMember {
  name: string;
  image: string;
  role: string;
}

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ title, members }) => (
  <section className="mb-16 max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
      {title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {members.map((member, index) => (
        <TeamMemberCard key={index} {...member} />
      ))}
    </div>
  </section>
);

export default TeamSection;
