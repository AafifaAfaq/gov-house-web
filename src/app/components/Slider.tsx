import Image from "next/image";
import React from "react";

function Slider() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-white bg-opacity-10 py-3">
      <div className="w-[90%] flex flex-wrap gap-5 justify-center items-center pt-5 ">
        {/* Box 1 */}
        <div className="w-full sm:w-[70%] md:w-[30%] lg:w-[25%] xl:w-[25%] h-auto cursor-pointer transition duration-200 ease-out hover:scale-105 hover:ease-in">
          <div className="relative w-full h-0 pb-[80%]"> {/* Aspect ratio container */}
            <Image
              src="/box1.jpg"
              alt="AI"
              className="rounded-lg object-cover"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, (max-width: 1024px) 30vw, 25vw"
            />
          </div>
        </div>

        {/* Box 2 */}
        <div className="w-full sm:w-[75%] md:w-[33%] lg:w-[28%] xl:w-[28%] h-auto cursor-pointer transition duration-200 ease-out hover:scale-105 hover:ease-in">
          <div className="relative w-full h-0 pb-[70%]"> {/* Aspect ratio container */}
            <Image
              src="/box2.jpg"
              alt="AI"
              className="rounded-lg object-cover"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 33vw, 28vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
