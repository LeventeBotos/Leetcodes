export default function Cards() {
    return(
        <div className='flex flex-col items-center'>
            <div className="card text-center items-center m-10 p-5">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 w-full flex-col flex h-fill justify-around font-bold text-3xl lg:text-5xl p-3">
                        <div>Matrix</div>
                        <div className="flex justify-evenly text-xl lg:text-3xl mt-1 md:mt-10">
                            <div className="text-blue-600 ">TS</div>
                            <div className="easy ">Easy</div>
                        </div>
                    </div>
                    
                    <div className="md:w-2/3 w-full p-3">
                        I wrote this leetcode on a bus on the way to transilvania on a class field trip.
                        It took me about 4 hours, but when I finally got the code working, it ran faster than 99.62% of the other submissions.
                    </div>
                </div>
                <div className='md:mt-10 mt-3 flex text-md justify-center text-sm text-white'>
                    <a target='_blank' href='https://www.leventebotos.github.io'>
                        <button className='m-3 rounded-full flex flex-row items-center text-center'>
                        <span className='rounded-full'>github</span>
                        </button>
                    </a>
                    <a href='https://leetcode.com/user1074I/' target='_blank'>
                        <button className='m-3 rounded-full flex flex-row items-center text-center'>
                        <span className='rounded-full'>leetcode</span>
                        </button>
                    </a>
                </div>
            </div>
            <div className="card text-center items-center m-10 p-5">
                <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 w-full flex-col flex h-fill justify-around font-bold text-3xl lg:text-5xl p-3">
                    <div>Two Sum</div>
                        <div className="flex justify-evenly text-xl lg:text-3xl mt-1 md:mt-10">
                            <div className="text-blue-600 ">TS</div>
                            <div className="easy ">Easy</div>
                        </div>
                    </div>
                    <div className="md:w-2/3 w-full p-3">
                      I wrote this leetcode on a bus on the way back from transilvania on a class field trip. 
                     It took me about 2 hours to finish, but unfortunately I used 3 funcitons for it, so it got quite slow.
                    </div>
                </div>
                <div className='md:mt-10 mt-3 flex text-md justify-center text-sm text-white'>
                    <a target='_blank' href='https://www.leventebotos.github.io'>
                        <button className='m-3 rounded-full flex flex-row items-center text-center'>
                        <span className='rounded-full'>github</span>
                        </button>
                    </a>
                    <a href='https://leetcode.com/user1074I/' target='_blank'>
                        <button className='m-3 rounded-full flex flex-row items-center text-center'>
                        <span className='rounded-full'>leetcode</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}