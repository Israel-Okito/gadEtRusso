import Link from 'next/link'
import React from 'react'
import { LuLayoutGrid } from "react-icons/lu";
import { FaUserGear } from "react-icons/fa6";
import { FcAutomatic } from "react-icons/fc";

const Dashboard = () => {

return (
    <div className='p-1' >
             <Link href='/'>
                <div className=' flex items-center   gap-[10px] bg-gradient-to-r from-indigo-500 cursor-pointer mt-2 my-1 p-2  rounded-lg'>
                <LuLayoutGrid size={20} color='white' />    
                  <p className='text-[15px] text-white p-2 '>Tableau de bord</p>
                </div>
               
             </Link>
         
        <div className='flex flex-col px-1  pb-4 pt-28 gap-10 '>
    
            <Link href='/technicien'>
                <div className=' flex items-center  gap-[10px]  hover:bg-slate-900 cursor-pointer  p-1 rounded-lg'>
                <FaUserGear  size={25}/>
                  <p>Techniciens</p>
                </div>
             </Link>
            <Link href='/materiel'>
                <div className=' flex items-center  gap-[10px]  hover:bg-slate-900 cursor-pointer my-1 p-1 rounded-lg'>
                 <FcAutomatic size={25}/>
                  <p > Matériels</p>
                </div>
             </Link>  

         </div>
   </div>
  )
}

export default Dashboard