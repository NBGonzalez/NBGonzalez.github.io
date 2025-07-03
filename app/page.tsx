import CVHero from "@/components/cv-hero";
import CVAbout from "@/components/cv-about";
import CVSkills from "@/components/cv-skills";
import CVProjects from "@/components/cv-projects";
import CVEducation from "@/components/cv-education";
import CVContact from "@/components/cv-contact";
import FloatingNav from "@/components/floating-nav";

export default function Home() {
  return (
    <>
      <FloatingNav />
      <main className="min-h-screen bg-black text-white">
        <CVHero />
        <CVAbout />
        <CVSkills />
        <CVProjects />
        <CVEducation />
        <CVContact />
      </main>
    </>
  );
}
