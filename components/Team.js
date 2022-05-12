import Image from 'next/image';
import {  useRouter } from 'next/router';
import Navinder from '../pages/team/Navinder';
import {
  MailIcon
} from '@heroicons/react/solid'

const teams = [
  { image: '/Nav.jpeg', name: 'Navinder Kaplish', title:'CEO', expertise:'Digital, Blockchain and Risk', city:'London', country:'dfg', email:'dfg', linkedin:'https://www.linkedin.com/in/navkaplish/', about:'Nav is a seasoned business and technology executive with 18+ years of global corporate and entrepreneurial experience in building and managing digital teams and in leadership roles spanning Governance, Risk & Compliance, Audits and conceptualisation and delivery of Blockchain products.'},
  {image:'/pHari.jpeg', name: 'Preethi Hari', title:'COO',expertise:'Risk Management', city:'London', country:'dfg', email:'dfg', linkedin:'https://www.linkedin.com/in/preethihari/', about: 'Preethi is a versatile senior-level corporate professional with 18+ years of experience in Risk Management, IT Governance, IT Security, Business Continuity, Audits, Compliance and Regulatory. She specialises in COBIT/ COSO framework, ITSM (ITIL), 6-Sigma, SOX etc in Banking, Insurance, Oil & Gas, Shipping, Mining, Logistics, Telecom and Commercial Real Estate.'},
  {image:'/Shree.jpg', name: 'Shreyas Ananth', title:'CTO',expertise:'Product Delivery, Support and Consultant', city:'Bengaluru', country:'dfg', email:'dfg', linkedin:'https://www.linkedin.com/in/shreyas-ananth-23b0b62b', about:'Shreyas is a technologist at heart and has over 12 years of experience in leading complex technology development and support projects for Risk Management software applications across banking and other product driven domains. He is ITIL-certified, Delivery and Release Lead.'}, 
]

const Team = () => {

  const router = useRouter();

  const gotoPerson = (arr, index) => {
    console.log('clicked!', arr)

    if (index===0) {
      router.push({
      pathname: '/team/Navinder',
      query: arr
    })
    } else if (index===1) {
       router.push({
      pathname: '/team/Preethi',
      query: arr
    })
    } else {
      router.push({
      pathname: '/team/Shreyas',
      query: arr
    })
    }
      
    
  }

  return (
    <div className='bg-white shadow-md max-w-7xl mx-auto m-4 lg:my-7'>
      <div className='text-3xl lg:text-4xl font-serif my-7 mx-4 text-center md:text-justify'>
        <span>Our Team</span>
      </div>
      <div className='flex flex-col md:grid md:grid-cols-2 m-4 lg:my-10 lg:grid-cols-3 '>      
        {
          teams.map((member, index) => (
            <div
              onClick={()=>gotoPerson(member, index)}
              key={index} className='  m-2 p-2 md:p-4 lg:m-7 cursor-pointer shadow-md rounded-t-xl rounded-b-xl border-t-2'>
              
              <div className='h-2/3  border-0'>
                <div className='mb-20 mt-6'>
                  <img className=' rounded-full p-1 bg-red-600 h-36 w-36 lg:h-48 lg:w-48 mx-auto' src={member.image} alt="" />
                </div>

                <div className='mx-4 font-sans text-xs text-ellipsis overflow-hidden leading-7'>
                  {member.about}
                </div>
              </div>

              <div className=' mx-4 mt-9 mb-6 flex flex-col space-y-2 font-sans'>
                <div className=''>
                  <span className='font-bold font-handwriting text-xl lg:text-2xl whitespace-pre-line leading-4 tracking-wider'>{member.name}</span>
                </div>

                <div className='m-0'>
                  <span className='tracking-widest '>{member.title}</span>
                </div>
                
                <div className='text-sm tracking-wider'>
                  {member.expertise}
                </div>
                
                <div className='text-sm tracking-widest'>
                  {member.city}
                </div>   
                
                <div className='flex'>
                  <div>
                    <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-700 mr-2" aria-hidden="true" />
                  </div>
                  <div>
                    <a href={member.linkedin}>
                      <img className='h-6 w-6 mr-2' src="/linkedin.png" alt="" />
                    </a>
                  </div>
                  <div onClick={()=>gotoPerson(member, index)}>
                    <span className='text-blue-700 font-charter text-md px-3 py-1 tracking-widest font-normal'>View Profile</span>
                  </div>
                </div>

              </div>

            </div>
          ))
        }
      </div>
    </div>
  );
}



export default Team;