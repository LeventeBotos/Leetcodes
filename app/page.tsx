import Image from 'next/image'

export default function Home() {
  return (
    <div className=" flex flex-col md:px-44 text-xl lg:text-3xl text-center">
      <div className='flex flex-col ninetyheight justify-evenly'>
        <div className='justify-center text-xl text-items-center text-center '>
          My <div className='gradient font-bold text-5xl lg:text-3xl'>LeetCodes</div>
        </div>
        <div>
          Every problem has its own history
        </div>
        <div className='flex text-md justify-center text-sm'>
          <button onClick='location.href="https://github.com/leventebotos"' className='bg-slate-800 m-3  p-1 px-5 rounded-full flex flex-row items-center text-center'>
            <Image src='/leetcode/app/github-mark-white.png' alt='logo' width={100} height={100} />
            <div className='pl-3'>github</div>
          </button>
          <button onClick='location.href="https://github.com/leventebotos"' className='bg-slate-800 m-3 p-1 px-5 rounded-full flex flex-row items-center text-center'>
            <div className='text-3xl'>o</div>
            <div className='pl-3'>leetcode</div>
          </button>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='w-2/3 rounded-xl p-5 my-5'>
          <div className='flex lg:flex-row flex-col'>
            <div>
              <div>Matrix</div>
              <div className='text-md'><ul>
                <li>Easy</li>
                <li>TypeScript</li>
              </ul></div>
              <div>leetcode</div>
            </div>
            <div>
              I wrote this leetcode on a bus on the way to transilvania on a class field trip.
              It took me about 4 hours, but when I finally got the code working, it ran faster than 86% of the other submissions.              
            </div>
          </div>
        </div>
        <div className='w-2/3 rounded-xl p-5 my-5'>
          Leetcode2
        </div>
      </div>
    </div>
  )
}
