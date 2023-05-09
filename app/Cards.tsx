export default function Cards() {
    return(
        <div className='flex flex-col items-center'>
            <div className='w-2/3 rounded-xl p-5 my-5 bg-slate-400'>
                <div className='flex lg:flex-row flex-col'>
                    <div className='p-3'>
                        <div className="gradient font-bold text-3xl lg:text-5xl">Matrix</div>
                        <div className='text-md flex flex-row justify-evenly'>
                            <div className="tag">Easy</div>
                            <div className="tag">TypeScript</div>
                        </div>
                        <div>leetcode</div>
                    </div>
                    <div className='p-3'>
                        I wrote this leetcode on a bus on the way to transilvania on a class field trip.
                        It took me about 4 hours, but when I finally got the code working, it ran faster than 86% of the other submissions.              
                    </div>
                </div>
            </div>
            <div className='w-2/3 rounded-xl p-5 my-5'>
                Leetcode2
            </div>
        </div>
    )
}