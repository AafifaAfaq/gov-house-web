import Image from "next/image";
import React from "react";

function AdvanceCourses() {
  return (
    <div className="w-full flex flex-col justify-center items-center mx-auto py-10 px-5">
      <h1 className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold p-7 text-[#044e83]">
        Advanced Courses
      </h1>

      {/* Container for cards */}
      <div className="w-[90%] md:w-[80%] lg:w-[70%] flex flex-wrap justify-center items-center gap-4">
        {/* Card 1 */}
        <div className="w-full sm:w-[90%] md:w-[48%] lg:w-[30%] bg-white rounded-lg shadow-2xl shadow-black cursor-pointer z-10 transition duration-200 ease-out hover:scale-105 hover:ease-in">
          <Image
            src="/AI.jpg"
            alt="AI"
            className="rounded-t-lg w-screen"
            width={400}
            height={200}
          />
          <h1 className="text-lg font-bold text-center p-5 text-gray-600">
            Artificial Intelligence
          </h1>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[90%] md:w-[48%] lg:w-[30%] bg-white rounded-lg shadow-2xl shadow-black cursor-pointer z-10 transition duration-200 ease-out hover:scale-105 hover:ease-in">
          <Image
            src="/metaverse.jpg"
            alt="Web 3 and Metaverse"
            className="rounded-t-lg w-screen"
            width={400}
            height={200}
          />
          <h1 className="text-lg font-bold text-center p-5 text-gray-600">
            Web 3 and Metaverse
          </h1>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-[90%] md:w-[48%] lg:w-[30%] bg-white rounded-lg shadow-2xl shadow-black cursor-pointer z-10 transition duration-200 ease-out hover:scale-105 hover:ease-in">
          <Image
            src="/cloudComputing.jpg"
            alt="Cloud-Native Computing"
            className="rounded-t-lg w-screen"
            width={400}
            height={200}
          />
          <h1 className="text-lg font-bold text-center p-5 text-gray-600">
            Cloud-Native Computing
          </h1>
        </div>

        {/* Card 4 */}
        <div className="w-full sm:w-[90%] md:w-[48%] lg:w-[30%] bg-white rounded-lg shadow-2xl shadow-black cursor-pointer z-10 transition duration-200 ease-out hover:scale-105 hover:ease-in">
          <Image
            src="/Ambient.jpg"
            alt="Ambient Computing"
            className="rounded-t-lg w-screen"
            width={400}
            height={200}
          />
          <h1 className="text-lg font-bold text-center p-5 text-gray-600">
            Ambient Computing
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AdvanceCourses;
