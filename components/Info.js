const Info = () => {
  return (
    <div className="flex flex-col bg-white shadow-md lg:grid lg:grid-cols-2 max-w-7xl mx-auto">
      <div className='py-1 font-charter text-2xl sm:text-4xl lg:text-5xl
            leading-relaxed sm:leading-normal lg:leading-normal sm:pb-9 sm:font-light
            md:py-7 lg:p-10'>
        91% growth expected in the global Managed Services market between 2019 and 2025.*
      </div>
      <div className='py-1 font-sans text-lg leading-7 md:leading-9 sm:text-2xl sm:tracking-wide
                      lg:text-xl lg:py-10 lg:leading-loose lg:px-8'>
        <p className='py-1'>
          Companies today are facing a shifting landscape that challenges their status quo and raises new decisions on how to operate an effective and efficient business. They are expected to leverage new technologies that enable their business and manage a global, remote workforce, while adhering to the ever changing global regulations — all at a lower cost.
        </p>
        <p className='pt-6'>
          PwC’s Managed Services delivers strategic business operations across the enterprise. Our team of highly-skilled and trained professionals, combined with the use of the latest advancements in technology and process, allows us to provide more effective and efficient outcomes. Shifting strategic business operations to PwC increases your ability to focus on accelerating your organization’s priorities.
        </p>
      </div>
    </div>
  );
}

export default Info;