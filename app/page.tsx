import Image from 'next/image'

export default function Home() {
  return (
    <div className=" flex flex-col bg-[#121212] md:px-44 text-xl lg:text-3xl text-center">
      <div className='flex flex-col h-96 justify-evenly'>
        <div className='justify-center text-xl text-items-center text-center '>
          Some <div className='gradient font-bold text-5xl lg:text-3xl'>LeetCodes</div> I solved
        </div>
        <div className='flex text-md justify-evenly'>
          <div className='p-1 px-3 rounded-full'>github</div>
          <div className='p-1 px-3 rounded-full' >leetcode</div>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='w-2/3 rounded-xl p-5 my-5'>
          Leetcode1
        </div>
        <div className='w-2/3 rounded-xl p-5 my-5'>
          Leetcode2
        </div>
      </div>
    </div>
  )
}
