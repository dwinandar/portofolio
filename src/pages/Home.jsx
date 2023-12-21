import myProfilePic from "../assets/ade-dwi.jpeg";
import { FaFileDownload } from "react-icons/fa";
import Resume from "../assets/resume_adedwinandar_ats.pdf";

const Home = () => {
  return (
    <main className='font-medium'>
      <div className='flex flex-col items-center justify-center max-w-lg gap-5 px-10 mx-auto md:flex-row md:p-5 p-7 rounded-3xl glassmorph'>
        <img
          src={myProfilePic}
          alt='profile-picture'
          className='border-2 rounded-full glassmorph'
          width={96}
          height={96}
        />
        <header className='text-center md:text-start'>
          <h3>Hi 👋, i&apos;m</h3>
          <h2 className='pb-1 text-3xl font-bold '>Ade Dwinandar Ritonga</h2>
          <h4>Web Developer / Coder / Programmer</h4>
        </header>
      </div>
      <div className='max-w-lg mx-auto mt-5 text-center md:mx-auto glassmorph rounded-3xl md:p-5 p-7'>
        <p>
          I am a Web Developer and Programmer living in Depok, Indonesia. I make
          web applications, usually with React.
        </p>
      </div>
      <a
        href={Resume}
        download
        className='flex items-center gap-3 mx-auto mt-5 mb-5 text-center rounded-full max-w-fit md:mx-auto glassmorph md:p-5 p-7'
      >
        <FaFileDownload /> Download My CV
      </a>
    </main>
  );
};

export default Home;
