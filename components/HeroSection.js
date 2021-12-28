import Image from "next/image";

const HeroSection = () => {
  return (
    <div className=' max-w-7xl mx-auto'>
      <div className='relative h-72 lg:h-96 sm:grid sm:grid-rows-4  sm:96 md:h-96 mx-auto min-w-full max-w-7xl overflow-hidden'>
        <div className=''>
          <Image className='opacity-90 max-w-7xl mx-auto' layout="fill" objectFit="cover"  src="https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/shutterstock_637136449.jpg" alt="" />
        </div>

        <div className=' lg:bg-transparent md:min-w-full flex flex-col md:mx-auto absolute bottom-0  md:left-0 mt-20'>
          <h4 className='bg-yellow-600 lg:bg-yellow-600 lg:rounded-t-lg lg:rounded-b-xs lg:px-2 lg:py-2
             text-gray-900
              py-1 px-1 rounded-t-lg rounded-b-sm
              mx-auto lg:mt-2
              shadow-2xl
              text-xl sm:text-[22px] md:text-2xl lg:text-4xl
              font-bold '>
            Managed Services
          </h4>
          <p className='bg-yellow-600 lg:bg-yellow-600 
              py-1 px-1 rounded-t-lg lg:rounded-xl lg:px-2 lg:pb-2
              sm:mx-auto md:min-w-full lg:min-w-0 lg:max-w-2xl
              text-gray-100
              text-sm sm:text-[18px] md:text-lg lg:text-2xl text-center
              font-medium'>
            Delivering scalable solutions that add greater value, through a digitally enabled experience, across the globe
          </p>
        </div>                
      </div>
    </div>
  );
}

export default HeroSection;