import Image from 'next/image';
const teams = [
  { icon: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1321&q=80', name: 'Firstname lastname', title:'CEO'},
  {icon:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', name: 'Firstname lastname', title:'COO'},
  {icon:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80', name: 'Firstname lastname', title:'CTO'}, 
]

const Team = () => {
  return (
    <div className='bg-white shadow-md max-w-7xl mx-auto m-4 lg:my-7'>
      <div className='text-3xl lg:text-4xl font-serif my-7 mx-4 text-center md:text-justify'>
        <span>BeamGlobal Manage Service&apos;s Team</span>
      </div>
      <div className='flex flex-col md:grid md:grid-cols-3 m-4 lg:my-10'>      
        {
          teams.map((team, index) => (
            <div key={index} className='  m-2 p-2 md:p-4 lg:m-7 shadow-md rounded-t-3xl rounded-b-3xl border-t-indigo-400 border-b-indigo-400 border-2'>
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