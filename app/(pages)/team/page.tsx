import React from "react";
import TeamMemberCard from "./component/TeamMemberCard";
import TeamSection from "./component/TeamSection";

interface TeamMember {
  name: string;
  image: string;
  role: string;
}

interface TeamData {
  managingPartner: TeamMember;
  teamLeaders: TeamMember[];
  leadershipTeam: TeamMember[];
  professionalStaff: TeamMember[];
  paralegals: TeamMember[];
}

const teamData: TeamData = {
  managingPartner: {
    name: "John Anderson",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    role: "Managing Partner",
  },
  teamLeaders: [
    {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      role: "Senior Partner",
    },
    {
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      role: "Technology Lead",
    },
    {
      name: "Emma Williams",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      role: "Operations Head",
    },
  ],
  leadershipTeam: [
    {
      name: "David Miller",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      role: "Finance Director",
    },
    {
      name: "Lisa Thompson",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      role: "HR Director",
    },
    {
      name: "Robert Wilson",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      role: "Strategy Head",
    },
  ],
  professionalStaff: [
    {
      name: "Patricia Garcia",
      image: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074",
      role: "Senior Associate",
    },
    {
      name: "James Brown",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      role: "Associate",
    },
    {
      name: "Emily Davis",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      role: "Associate",
    },
  ],
  paralegals: [
    {
      name: "Jennifer Lee",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      role: "Senior Paralegal",
    },
    {
      name: "Mark Taylor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      role: "Paralegal",
    },
    {
      name: "Sophie Martin",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      role: "Paralegal",
    },
  ],
};

const MainPage: React.FC = () => {
  return (
    <div className="max-w-8xl py-32 justify-center">
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-5xl font-bold text-foreground mb-4">
          Meet the First Legal Counsel Team
        </h1>
        <p className="text-lg text-primary max-w-4xl mx-auto mt-8">
          Our leadership team is a group of savvy, business-minded executives
          who are driven in their constant pursuit to elevate the standards of
          how a virtual law firm should operate. We are committed to helping our
          clients navigate the challenges and opportunities of our rapidly
          changing world.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          FLC MANAGING PARTNER
        </h2>
        <div className="max-w-md mx-auto flex justify-center">
          <TeamMemberCard {...teamData.managingPartner} />
        </div>
      </section>
      <div className="flex justify-center my-10">
        <hr className="w-full max-w-7xl border-1 border-primary" />
      </div>

      <TeamSection title="FLC TEAM LEADERS" members={teamData.teamLeaders} />
      <div className="flex justify-center my-10">
        <hr className="w-full max-w-7xl border-1 border-primary" />
      </div>

      <TeamSection title="LEADERSHIP TEAM" members={teamData.leadershipTeam} />
      <div className="flex justify-center my-10">
        <hr className="w-full max-w-7xl border-1 border-primary" />
      </div>

      <TeamSection
        title="PROFESSIONAL STAFF"
        members={teamData.professionalStaff}
      />
      <div className="flex justify-center my-10">
        <hr className="w-full max-w-7xl border-1 border-primary" />
      </div>

      <TeamSection title="PARALEGALS" members={teamData.paralegals} />
      <div className="flex justify-center my-10">
        <hr className="w-full max-w-7xl border-1 border-primary" />
      </div>
    </div>
  );
};

export default MainPage;
