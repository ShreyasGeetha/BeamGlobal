const Footer = () => {
  return (
    <div className='bg-white'>
      <div className=' mb-0 max-w-7xl min-h-fit mx-auto py-3 md:py-10 px-10 md:px-20 bg-lightGreen shadow-md md:grid md:grid-cols-4'>
        <div className='col-span-3'>
          <div className='mx-2'>
            <span className='font-sofia text-lg font-medium tracking-wide text-white whitespace-pre-line'>
              A Managed Services Company in <br /> London, Uk <br /> Bengaluru, India
            </span>
            <div className='m-2 mx-1 tracking-wide py-2 font-sofia text-white flex flex-col md:flex-row'>
              {/* <span className='text-lg mr-3'>hello@example.com</span>
              <span className='hidden md:block mx-3 text-xl'>•</span>
              <span className='md:mx-3 text-lg'>856.816.6159</span>
              <span className='hidden md:block mx-3 text-xl'>•</span>
              <span className='md:mx-3 text-lg'>856.816.6159</span>               */}
            </div>
            <div className='m-1 mb-3 cursor-pointer'>
              <a href="https://www.linkedin.com/in/navkaplish/">
                <span className='mx-1 md:hidden font-sofia tracking-widest  leading-1 border-b pb-1 max-w-xl text-white'>
                  LinkedIn
                </span>
              </a>
            </div>
          </div>
          <div className='flex items-center text-white'>            
            <img
            className='w-3 h-3 lg:w-4 lg:h-4 self-center p-0 rounded-full mx-2 bg-gray-500'
              src="/copyright.svg" alt="" />
            <div>
              <span className='text-sm tracking-wide md:text-md lg:text-lg font-handwriting text-gray-500'> Copyright 2021 Beam Global Services Ltd. All Rights Reserved</span>
            </div>
          </div>
        </div>
        <div className='hidden cursor-pointer md:block m-2 md:justify-self-end text-white '>
          <a href="https://www.linkedin.com/in/navkaplish/">
          <span className='font-sofia tracking-widest leading-1 border-b pb-1'>
            LinkedIn
          </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;