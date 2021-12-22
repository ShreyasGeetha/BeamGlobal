const Offerings = () => {
  return (
    <div className='max-w-7xl mx-auto bg-white shadow-md m-6'>
      <div className='text-3xl  font-extrabold font-Helvetica md:text-4xl lg:text-5xl my-4 p-4 text-center'>
        <span className='shadow-sm p-4'>
          Our Offerings
        </span>
      </div>
      <div className='p-4 md:grid md:grid-cols-2 gap-3  lg:shadow-lg'>
        <div className='text-center sm:cursor-pointer group transition-all duration-300 transform ease-in-out lg:hover:shadow-2xl  max-w-md mx-auto shadow-lg lg:shadow-none py-4'>
          <div className='md:group-hover:scale-110 transition-all transform ease-in-out '>
            <span className='text-2xl md:text-xl md:font-extrabold  transition-all duration-400 transform ease-in-out font-bold font-Helvetica '>
              Application Control and Security Managed Services
            </span>
          </div>
          <div className='m-1 p-2 '>
            <span className='text-xl font-normal'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet repellat odit nesciunt temporibus omnis iste cupiditate est sunt veniam! Suscipit temporibus rem, dolorem numquam architecto ullam doloribus sed laboriosam 
            </span>
          </div>
        </div>
        <div className='text-center sm:cursor-pointer group transition-all duration-300 transform ease-in-out lg:hover:shadow-2xl  max-w-md mx-auto shadow-lg lg:shadow-none py-4'>
          <div className='group-hover:scale-110 transition-all transform ease-in-out '>
            <span className='text-2xl lg:text-xl lg:font-extrabold  transition-all duration-400 transform ease-in-out font-bold font-Helvetica group-hover:scale-125'>
              Application Managed Services
            </span>
          </div>
          <div className='m-1 p-2'>
            <span className='text-xl font-normal'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet repellat odit nesciunt temporibus omnis iste cupiditate est sunt veniam! Suscipit temporibus rem, dolorem numquam architecto ullam doloribus sed laboriosam 
            </span>
          </div>
        </div>
        <div className='text-center sm:cursor-pointer group transition-all duration-300 transform ease-in-out lg:hover:shadow-2xl  max-w-md mx-auto shadow-lg lg:shadow-none py-4 md:my-10'>
          <div className='group-hover:scale-110 transition-all transform ease-in-out '>
            <span className='text-2xl lg:text-xl lg:font-extrabold  transition-all duration-400 transform ease-in-out font-bold font-Helvetica group-hover:scale-125'>
              Managed Service Insights
            </span>
          </div>
          <div className='m-1 p-2'>
            <span className='text-xl font-normal'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet repellat odit nesciunt temporibus omnis iste cupiditate est sunt veniam! Suscipit temporibus rem, dolorem numquam architecto ullam doloribus sed laboriosam
            </span>
          </div>
        </div>
        <div className='text-center sm:cursor-pointer group transition-all duration-300 transform ease-in-out lg:hover:shadow-2xl  max-w-md mx-auto shadow-lg lg:shadow-none py-4 md:my-10'>
          <div className='group-hover:scale-110 transition-all transform ease-in-out '>
            <span className='text-2xl lg:text-xl lg:font-extrabold  transition-all duration-400 transform ease-in-out font-bold font-Helvetica group-hover:scale-125'>
              Control Testing and Monitoring
            </span>
          </div>
          <div className='m-1 p-2'>
            <span className='text-xl font-normal'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet repellat odit nesciunt temporibus omnis iste cupiditate est sunt veniam! Suscipit temporibus rem, dolorem numquam architecto ullam doloribus sed laboriosam
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offerings;