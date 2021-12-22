import Image from 'next/image';

const challenges = [
  { icon: '1.png', heading: 'Navigating a complex regulatory environment', content: 'Proactively manage operational risk and address its impact across the business.' },
  {icon:'2.png', heading:'Managing an extensive people function', content:'Direct access to one of the largest professional services providers with technical, operational and strategic capabilities.'},
  {icon:'3.png', heading:'Keeping current with advancements in technology', content:'Leverage the latest technology available combined with industry leading processes to fast-track your digital capabilities.'},
  {icon:'4.png', heading:'Addressing ongoing cost pressures', content:'Accelerate efficiencies and improve outcomes across functions.'},
  {icon:'5.png', heading:'Increase agility, at scale', content:'Access to a variable workforce and flexible technology, supporting your dynamic business needs when and where you want it.'},
]

const MiddleSection = () => {
  return (
    <div className='bg-red-50 max-w-7xl mx-auto shadow-md '>
      <div className='m-2 py-4 md:m-4 md:py-7'>
        <span className='font-extrabold text-xl m-1 sm:text-3xl lg:m-10 lg:py-7 md:m-5 font-handwriting lg:text-4xl'>Companies today are challenged with:</span>
      </div>
      <div className='m-4 md:grid md:grid-cols-2 lg:grid-cols-3'>
        {
          challenges.map((items, index) => (
            <div className='p-2 m-2'>
              <div className=''>
                <img className=' rounded-full 
                      h-50 w-48 sm:h-52 sm:w-56 md:h-44 md:w-50 
                      ml-auto mr-auto' src={`/${items.icon}`} alt="" />
              </div>
              <div className='m-1 text-center'>
                <span className='font-roboto font-bold 
                      text-lg  sm:text-2xl lg:text-2xl'>{items.heading}</span>
              </div>
              <div className='m-2 sm:m-1
                  p-1 sm:p-0
                  text-center'>
                <span className='sm:text-lg'>{ items.content }</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default MiddleSection;