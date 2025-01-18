import Link from "next/link";
import React from "react";

interface TeamMember {
  name: string;
  image: string;
  role: string;
}

const TeamMemberCard: React.FC<TeamMember> = ({ image, name, role }) => (
  <div className="bg-[#e1dfde] shadow-md overflow-hidden w-72 h-90 mx-auto">
    <div className="relative h-72 overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="p-3 text-center">
      <h3 className="text-xl font-bold text-foreground">{name}</h3>
      <p className="text-sm font-semibold text-primary mt-2">{role}</p>
      <div className="flex justify-center"></div>
      {/* <Link href="/team/profile" as={`/team/${name}`}> */}
      <Link href="/team/profile" as={`/team/profile/`}>
        <button className="text-accent hover:text-primary transition-colors duration-300 mt-8">
          Read Full Bio
        </button>
      </Link>
    </div>
  </div>
);

export default TeamMemberCard;
