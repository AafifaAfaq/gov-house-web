
import Image from "next/image";
import React from "react"

function Box() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-[90%] flex flex-wrap gap-3 justify-center items-center pt-5 bg-white bg-opacity-10">
        {/* Box 1 */}
        <div className="w-full sm:w-[70%] md:w-[30%] lg:w-[25%] xl:w-[25%] h-auto  cursor-pointer transition duration-200 ease-out hover:scale-105 hover:ease-in  ">
        <Image src='/slideShow2.jpg' alt="AI" className="rounded-lg w-screen" width={500} height={200}/>
        </div>

        {/* Box 2 */}
        <div className="w-full sm:w-[75%] md:w-[33%] lg:w-[28%] xl:w-[28%] h-auto  cursor-pointer  transition duration-200 ease-out hover:scale-105 hover:ease-in ">
        <Image src='/piaic.jpg' alt="AI" className="rounded-lg w-screen" width={600} height={300}/>
        </div>

        {/* Box 3 */}
        <div className="w-full sm:w-[70%] md:w-[30%] lg:w-[25%] xl:w-[25%] h-auto  cursor-pointer transition duration-200 ease-out hover:scale-105 hover:ease-in ">
        <Image src='/governorsinsh.jpg' alt="AI" className="rounded-lg w-screen" width={500} height={200}/>
        </div>
      </div>
    </div>
  );
}

export default Box;
