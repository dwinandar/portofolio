import { ProjectsContent } from "../assets/data";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className='grid grid-cols-1 gap-5 px-5 pb-5 md:pb-0 md:grid-cols-2 xl:grid-cols-3'>
      {ProjectsContent.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
