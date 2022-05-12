const Info = () => {
  return (
    <div className="flex flex-col bg-white shadow-md lg:grid lg:grid-cols-2 max-w-7xl mx-auto">
      <div className='py-1 font-charter text-2xl sm:text-4xl lg:text-5xl
            leading-relaxed sm:leading-normal lg:leading-normal sm:pb-9 sm:font-light
            md:py-7 lg:p-10 mx-3'>
        91% growth expected in the global Managed Services market between 2019 and 2025.*
      </div>
      <div className='py-1 mx-3 font-charter text-lg  leading-7 md:leading-9 md:text-xl sm:tracking-wide
                      lg:text-xl lg:py-10 lg:leading-loose lg:px-8'>
        <p className='py-1'>
          Compliance and risk teams across industries are constantly challenged to increase their efficiency
          and effectiveness of various Governance, Risk and Compliance programs within the company. This
          involves running effective compliance programs, manage large scale programs with fewer resources,
          ensure high-quality results alongside maintaining faster turnaround times with lower costs.
        </p>
        <p className='pt-6'>
          The industry is constantly seeking innovative methods to helping organisations unlock the rewards associated with an integrated GRC solution coupled with effective services to maximize efficiencies
          within the business. As the industry matures, the organisations have started recognising that
          deployment of GRC tools together with an integrated managed services approach is paving the way
          on how the organisation shapes and delivers to various compliance and business requirements.
        </p>
        <p className='pt-6'>
          Our proposed approach for Managed Services will address ROI on GRC product to ensure maximum utilisation of the product for maximum benefit, keeping low operational expenditure on GRC staff within the organisation and removes the challenges associated with ownership of GRC administration (IT vs Finance vs Audit).
        </p>
      </div>
    </div>
  );
}

export default Info;