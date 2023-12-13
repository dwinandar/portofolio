import { SkillsItem } from "../assets/data";

const Skills = () => {
  return (
    <section className='max-w-md mx-auto font-medium glassmorph p-7 rounded-3xl'>
      <h1 className='text-3xl font-bold text-center'>Tech Stack</h1>
      <p className='mb-5 text-center'>
        Here&apos;s some of technology i&apos;ve used
      </p>
      <section className='flex flex-wrap justify-center gap-2'>
        {SkillsItem.map((skill) => (
          <div
            className='flex items-center gap-3 p-4 transition-all duration-300 border shadow-sm bg-white/5 border-black/20 shadow-gray-900 rounded-xl hover:scale-110 '
            key={skill.id}
          >
            {skill.icon} {skill.tech}
          </div>
        ))}
      </section>
    </section>
  );
};

export default Skills;
