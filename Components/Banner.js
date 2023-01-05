import Image from "next/image";

export default function Banner(){
    return(
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
            <Image
            src='https://tinyurl.com/4rr4xeva'
            fill
            style={{objectFit: "cover"}}/>
<div className='absolute top-1/2 w-full text-center'>
            <p className='text-sm sm:text-lg text-white font-bold'>Not sure where to go? Perfect</p>

            <button className='text-purple-500 bg-white px-10 py-4 shadow-lg rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 ease-out'>I'm flexible</button>
        </div>
        </div>
    )
}