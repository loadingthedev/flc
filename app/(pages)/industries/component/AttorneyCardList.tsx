"use client";
import AttorneyCard from "../component/AttorneyCard";

const attorneyData = [
  {
    id: 1,
    name: "Sarah Johnson",
    phone: "+1 (555) 123-4567",
    email: "sarah.johnson@legalfirm.com",
    practiceArea: "Corporate Law",
    description:
      "Specializing in corporate law with over 15 years of experience in mergers, acquisitions, and business restructuring. Known for strategic approach to complex corporate matters.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200",
  },
  {
    id: 2,
    name: "Michael Chen",
    phone: "+1 (555) 234-5678",
    email: "michael.chen@legalfirm.com",
    practiceArea: "Intellectual Property",
    description:
      "Expert in patent law, trademark protection, and intellectual property litigation. Helping innovators protect their creative assets for over a decade.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    phone: "+1 (555) 345-6789",
    email: "emily.rodriguez@legalfirm.com",
    practiceArea: "Family Law",
    description:
      "Dedicated family law attorney specializing in divorce, custody, and domestic relations. Compassionate advocate for families in transition.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200",
  },
];

const practiceAreas = ["Corporate Law", "Intellectual Property", "Family Law"];

const AttorneyCardList = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        {attorneyData.map((attorney) => (
          <AttorneyCard
            key={attorney.id}
            id={attorney.id}
            name={attorney.name}
            phone={attorney.phone}
            email={attorney.email}
            practiceArea={attorney.practiceArea}
            description={attorney.description}
            image={attorney.image}
          />
        ))}
      </div>
    </div>
  );
};

export default AttorneyCardList;
