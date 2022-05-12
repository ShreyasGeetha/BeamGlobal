import { useRouter } from "next/router";

const Navinder = (props) => {
  const router = useRouter()
  const info = router.query;

  return (
    <div className='max-w-7xl mx-auto my-20 lg:grid lg:grid-cols-4 lg:my-20'>
      <div className=' m-2'>
        <img className=' rounded-full h-36 w-36 lg:h-48 lg:w-48 mx-auto p-1 bg-red-600' src={info.image} alt="" />        
      </div>
      <div className='col-span-2'>
        <div className='text-center flex flex-col 
              lg:my-10 lg:text-justify '>
          <span className='text-2xl md:text-3xl lg:text-4xl font-bold'>{info.name}</span>
          <span className='text-lg md:text-xl lg:text-2xl font-sans font-semibold'>{info.title}{' '} Beam Global{', '} UK</span>
          <span></span>
        </div>
        <div className='md:max-w-3xl md:mx-auto text-center font-roboto md:text-xl md:font-handwriting md:tracking-wide'>
          <div className='m-2 leading-7 md:leading-8 lg:leading-9 p-2 lg:text-left lg:text-2xl lg:tracking-wide'>
            <div>
              Navinder has led multiple global Governance, Risk & Compliance (GRC) programmes for clients over the last 18 years. He comes from a Big Four Audit background having worked at Deloitte and Ernst & Young.
            </div>
            <div className='my-4 lg:my-9'>
              Navinder specialises in working with client audit, finance and IT teams to find solutions to risk and compliance challenges, especially when implementing and using complex ERP systems like Oracle, PeopleSoft and SAP.
              Navinder is passionate about helping clients find solutions to their GRC solutions and has spoken at multiple  webinars on a variety of risk management topics.
            </div>
            <div>
              Navinder is an MBA from London Business School.
            </div>
          </div>
        </div>
      </div>
      <div className='lg:my-10 mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-h-28 border border-x-indigo-300 border-t-0 border-b-0 
      lg:border-x-0 lg:border-y'>
        <div className='text-center text-2xl font-bold md:text-2xl lg:my-3 font-handwriting'>
          Contact Details
        </div>
        <div className=''>
          <a href="https://www.linkedin.com/in/navkaplish/">
            <img className='h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10  mx-auto my-2' src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navinder;