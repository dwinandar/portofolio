const About = () => {
  return (
    <div className='px-5 pb-5'>
      <section className='grid gap-5 font-medium'>
        <div className='max-w-md mx-auto p-7 glassmorph rounded-3xl'>
          <h1 className='mb-5 text-3xl font-bold text-center'>About Me</h1>
          <p className='text-justify '>
            I am a student at the University of Bina Sarana Informatika with a
            major in information technology who is interested in programming,
            especially in web programming. I love building website such as
            landing page, company profile and many more.
          </p>
        </div>
        <div className='grid w-full max-w-md grid-cols-1 gap-5 mx-auto md:grid-cols-2'>
          <div className=' p-7 glassmorph rounded-3xl'>
            <h1 className='mb-5 text-3xl font-bold text-center'>Born</h1>
            <div className='text-center '>
              <p>Kabanjahe,</p>
              <p>North Sumatra,</p>
              <p>Indonesia.</p>
            </div>
          </div>
          <div className=' p-7 glassmorph rounded-3xl'>
            <h1 className='mb-5 text-3xl font-bold text-center'>Hobbies</h1>
            <div className='text-center '>
              <p>Code,</p>
              <p>Game,</p>
              <p>Music.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
