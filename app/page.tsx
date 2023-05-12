import Image from 'next/image'
import { MouseEventHandler } from 'react';
import Cards from './Cards';


export default function Home() {

  return (
    <div className=" flex flex-col text-xl lg:text-3xl text-center">
      <div className='flex flex-col ninetyheight justify-evenly'>
        <div className='justify-center  text-items-center text-center '>
          My <div className='gradient font-bold text-5xl lg:text-7xl'>LeetCodes</div>
        </div>
        <div>
          Every problem has its own history.
        </div>
        <div className='flex text-md justify-center text-sm text-white'>
          <button className='m-3 rounded-full flex flex-row items-center text-center'>
            <span className='rounded-full'>github</span>
          </button>
          {/* <div className='bg-slate-400 m-3  p-1 px-5 rounded-full flex flex-row items-center text-center'>
            <div className='text-3xl'>o</div>
            <div className='pl-3'>github</div>
          </div> */}
          <button className='m-3 rounded-full flex flex-row items-center text-center'>
            <span className='rounded-full'>leetcode</span>
          </button>
        </div>
      </div>
      <Cards />
    </div>
  )
}
