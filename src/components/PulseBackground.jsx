const PulseBackground = () => {
  return (
    <>
      <div className='bg-blue-700/70 md:w-96 md:h-96 w-52 h-52 left-1 fixed lg:left-72 -z-50 rounded-full blur-[10rem] md:-top-32 duration-500 animate-pulse'></div>
      <div className='fixed rounded-full bg-pink-700/70 md:w-96 md:h-96 w-52 h-52 right-1 lg:right-72 -z-40 blur-[10rem] md:-top-32 animate-pulse'></div>
      <div className='bg-pink-700/70 md:w-96 md:h-96 w-52 h-52 left-1 fixed lg:left-72 -z-50 rounded-full blur-[10rem] md:-bottom-32 duration-500 animate-pulse'></div>
      <div className='fixed rounded-full animate-pulse bg-blue-700/70 md:w-96 md:h-96 w-52 h-52 right-1 lg:right-72 -z-40 blur-[10rem] md:-bottom-32'></div>
    </>
  );
};

export default PulseBackground;
