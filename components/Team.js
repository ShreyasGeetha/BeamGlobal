import Image from 'next/image';
import {  useRouter } from 'next/router';
import Navinder from '../pages/team/Navinder';
const teams = [
  { icon: '/Nav.jpeg', name: 'Navinder Kaplish', title:'CEO'},
  {icon:'/pHari.jpeg', name: 'Preethi Hari', title:'COO'},
  {icon:'/Shree.jpg', name: 'Shreyas Ananth', title:'CTO'}, 
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
        <span>BeamGlobal Manage Service&apos;s Team</span>
      </div>
      <div className='flex flex-col md:grid md:grid-cols-3 m-4 lg:my-10'>      
        {
          teams.map((team, index) => (
            <div
              onClick={()=>gotoPerson(team, index)}
              key={index} className='  m-2 p-2 md:p-4 lg:m-7 cursor-pointer shadow-md rounded-t-3xl rounded-b-3xl border-t-indigo-400 border-b-indigo-400 border-2'>
              <div>
                <img className=' rounded-full h-36 w-36 lg:h-48 lg:w-48 mx-auto' src={team.icon} alt="" />
              </div>
              <div className='text-center m-1 p-1'>
                <span className='font-bold font-handwriting text-xl lg:text-2xl'>{team.name}</span>
              </div>
              <div className='text-center m-1'>
                <span className='font-semibold'>{team.title}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}



export default Team;