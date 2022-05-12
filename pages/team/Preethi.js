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
              Preethi is an experienced Governance, Risk & Compliance professional with 18+ years of experience in Risk Management, IT Governance, IT Security, Business Continuity, Audits, Compliance and Regulatory. She specialises in COBIT/ COSO framework, ITSM (ITIL), 6-Sigma, SOX etc in Banking, Insurance, Oil & Gas, Shipping, Mining, Logistics, Telecom and Commercial Real Estate.
            </div>
            <div className='my-4 lg:my-9'>
              She has led large, complex risk and compliance programmes for Deloitte, Ernst & Young and KPMG. She has worked with leading Financial Sector companies such as Deutsche Bank, ING, Bank of America, Barclays and Lloyds.
            </div>
            <div>
              Preethi has an MBA from London Business School.
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
          <a href="https://www.linkedin.com/in/preethihari/">
            <img className='h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10  mx-auto my-2' src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navinder;