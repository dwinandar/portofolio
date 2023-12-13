const ProjectCard = ({ ...project }) => {
  return (
    <div className='w-full shadow-xl card bg-base-100 -z-30'>
      <figure>
        <img src={project.img} alt={`${project.title}-ss`} />
      </figure>
      <div className='gap-3 font-medium card-body'>
        <h2 className='items-center justify-center card-title'>
          {project.title}
        </h2>
        <ul className='flex flex-wrap gap-2'>
          {project.tech.map((t) => (
            <li key={t} className='py-2 badge badge-outline'>
              {t}
            </li>
          ))}
        </ul>
        <p>{project.desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
