export default function Cards() {
    return(
        <div className='flex flex-col items-center'>
            <div className="card flex flex-col md:flex-row text-center items-center m-10">
                <div className="md:w-1/3 w-full font-bold text-3xl lg:text-5xl p-3">
                    Matrix
                </div>
                <div className="md:w-2/3 w-full p-3">
                    I wrote this leetcode on a bus on the way to transilvania on a class field trip.
                    It took me about 4 hours, but when I finally got the code working, it ran faster than 86% of the other submissions.</div>
            </div>
            <div className="card flex flex-col md:flex-row text-center items-center m-10">
                <div className="md:w-1/3 w-full font-bold text-3xl lg:text-5xl p-3">
                    Next Card
                </div>
                <div className="md:w-2/3 w-full p-3">
                    I wrote this leetcode on a bus on the way to transilvania on a class field trip.
                    It took me about 4 hours, but when I finally got the code working, it ran faster than 86% of the other submissions.</div>
            </div>
        </div>
    )
}