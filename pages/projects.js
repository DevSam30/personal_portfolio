import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProjectCard from "../components/projectcard";

export default function Projects() {
  const projects = [
    { title: "Portfolio Website", description: "My personal portfolio", link: "#" },
    { title: "Blog App", description: "A fullstack blog app with Next.js", link: "#" },
  ];

  return (
    <div>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <h1>Projects</h1>
        {projects.map((p, idx) => <ProjectCard key={idx} {...p} />)}
      </main>
      <Footer />
    </div>
  );
}