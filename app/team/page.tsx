"use client";

import { useState, useEffect, useRef } from "react";
import { FaLinkedin } from "react-icons/fa";

type TeamMember = {
  name: string;
  title: string;
  imageSrc: string;
  bio: string;
  linkedinUrl: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Jean De Dieu Niyonzima",
    title: "CEO",
    imageSrc: "/profile.jpg",
    bio: `Jean De Dieu is a lecturer of Physics at University of Rwanda. He holds a Doctor of Philosophy in Physics and Chemistry of Materials from Sorbonne University in France. During his research endeavors, he immersed himself in developing Python scripts for analyzing experimental data. His proficient data analysis skills allow him to uncover intricate patterns, interpret experimental findings, and explore material properties in depth. He also holds a Master’s degree in Mathematical Sciences (climate resilience), which marked the beginning of his journey as a data analyst. He is also highly interested in financial and actuarial mathematics.`,
    linkedinUrl:
      "https://www.linkedin.com/in/dr-jean-de-dieu-niyonzima-7ba62411a/",
  },
  {
    name: "David Hagumuwumva",
    title: "Chief Technology Officer",
    imageSrc: "/profile.jpg",
    bio: `David is a Financial Stability Monitoring Analyst at the National Bank of Rwanda, where he oversees the progress and sets strategies for banking operations within the country. David also spends his time teaching at Adventists University of East and Central Africa as an assistant lecturer. He holds a Master’s degree in Electrical and Computer Engineering from Carnegie Mellon University (CMU), where he focused on data science. Before joining CMU, he spent time working as a data analyst in the research and development department at Earth Enable (TUBEHEZA). He also holds a Bachelor's degree in Mathematics from the University of Rwanda, College of Science and Technology. David is interested in combining data and traditional statistical models to make business decisions.`,
    linkedinUrl: "https://www.linkedin.com/in/david-hagumuwumva-82125b21a/",
  },
  {
    name: "NGIRIMANA Schadrack",
    title: "Technical Lead",
    imageSrc: "/schadrack.jpg",
    bio: `Ngirimana Schadrack is a software engineer and DevOps specialist with a strong focus on building scalable systems and automating cloud infrastructure. He holds a Master’s degree in Software Engineering from Carnegie Mellon University Africa and a background in Computer Engineering, combining deep backend expertise with hands-on DevOps practices.
    He currently serves as Senior DevOps Engineer at AOS Ltd. He designs secure CI/CD pipelines, automates deployments using ArgoCD and Terraform, and implements observability with Grafana and Prometheus. Schadrack has also built and maintained full-stack applications using technologies like NestJS, Node.js, Spring Boot, Go, React, and Next.js, and has led infrastructure projects involving Kubernetes and containerization. He is passionate about clean code, developer productivity, and reliable system operations.
    At VAC, Schadrack brings a blend of deep technical expertise and practical problem-solving to help build robust digital platforms, streamline development workflows, and ensure infrastructure scalability and reliability for data-driven solutions.`,
    linkedinUrl: "https://www.linkedin.com/in/schadrack-ngirimana-650507162/",
  },
  {
    name: "Consolee Muragijimana",
    title: "Chief Financial Officer",
    imageSrc: "/console.png",
    bio: `Consolee is a Data Scientist (Business Intelligence) at Bank of Kigali (BK), the biggest commercial bank in Rwanda. Her primary roles are building models, analyzing data, automating reports, and advising the Bank's leadership on performance. She holds a Master's degree in Mathematical Sciences from the African Institute for Mathematical Sciences (AIMS Rwanda), majoring in Data Science. Consolee brings in rich experience in analyzing big data and building business dashboards.`,
    linkedinUrl: "https://www.linkedin.com/in/consolee-muragijimana-b33a3a21a/",
  },
  {
    name: "Jean Modeste Mushimiyimana",
    title: "Chief Operation Officer",
    imageSrc: "/modeste.jpg",
    bio: `Modeste is a dedicated Data Scientist, currently pursuing a PhD in Environmental Systems Sciences at ETH Zurich, Switzerland. As an Environmental Physicist, he has a strong background and experience in environmental data processing, analysis, and modeling. Previously, Modeste earned two Master’s degrees: one in Mathematical Sciences with specialization in Data Science and Climate Science from AIMS Rwanda; and a research-based Master’s in Technical Physics, focusing on environmental modeling, from Lappeenranta-Lahti University of Technology (LUT), Finland. Modeste is passionate about research, consulting, and working on projects that involve data analytics and modeling. He believes that “humans can experience and interact with nature, but nature communicates accurately with us through the recorded data.”`,
    linkedinUrl:
      "https://www.linkedin.com/in/jean-modeste-mushimiyimana-30ba21224/",
  },
];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setSelectedMember(null);
      }
    };
    if (selectedMember) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedMember]);

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary mb-4">
            Meet Our Team
          </h1>
          <p className="text-secondary/70 max-w-2xl mx-auto">
            A diverse team of data scientists, engineers, and strategists
            dedicated to transforming your ideas into impactful solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white border border-accent p-6 rounded-xl shadow-sm hover:shadow-md hover:translate-y-[-5px] transition-all group cursor-pointer text-center"
              onClick={() => setSelectedMember(member)}
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 mb-4 mt-2">
                <img src={member.imageSrc} alt={member.name} />
              </div>
              <h3 className="text-xl font-bold text-secondary group-hover:text-[#FF8C4B]">
                {member.name}
              </h3>
              <p className="text-secondary/70 font-medium">{member.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div
            ref={modalRef}
            className="bg-white max-w-lg w-full rounded-xl p-6 relative shadow-lg"
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
            >
              ✕
            </button>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-primary/20 mb-4">
                <img src={selectedMember.imageSrc} alt={selectedMember.name} />
              </div>
              <div className="flex justify-center items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-secondary">
                  {selectedMember.name}
                </h3>
                <a
                  href={selectedMember.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
              <p className="text-secondary/70 font-medium mb-4">
                {selectedMember.title}
              </p>
              <p className="text-secondary text-justify whitespace-pre-wrap">
                {selectedMember.bio}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-accent/20 py-20 mt-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Work With Experts Who Understand Data
          </h2>
          <p className="text-secondary/70 mb-8 max-w-2xl mx-auto">
            From insights to implementation, our team is ready to help you solve
            real-world challenges with confidence.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
