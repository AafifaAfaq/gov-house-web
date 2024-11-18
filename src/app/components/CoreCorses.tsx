import Image from "next/image";
import React from "react";

function Courses() {
  return (
    <div id="courses" className="w-full flex flex-col justify-center items-center px-5">
      <h1 className="text-2xl md:text-3xl font-bold p-5 text-[#044e83]">
        Core Courses Sequence
      </h1>
      <div className="w-full max-w-5xl flex flex-wrap justify-center items-center gap-4 px-4">
        {/* Course Card 1 */}
        <div className="w-full sm:w-[300px] bg-white rounded-lg shadow-2xl shadow-black cursor-pointer transition duration-200 ease-out hover:scale-105 hover:ease-in">
          <Image
            src="/earn_as_your_learn.b8248a49.jpg"
            alt="AI"
            className="rounded-t-lg object-cover w-screen"
            width={300}
            height={200}
          />
          <h1 className="text-lg font-bold text-center p-5 text-gray-600">
            Programming Fundamentals
          </h1>
        </div>

        {/* Course Card 2 */}
        <div className="w-full sm:w-[300px] bg-white rounded-lg shadow-2xl shadow-black cursor-pointer transition duration-200 ease-out hover:scale-105 hover:ease-in">
          <Image
            src="/nextjs.jpg"
            alt="Web2 Using NextJS"
            className="rounded-t-lg object-cover w-screen"
            width={300}
            height={200}
          />
          <h1 className="text-lg font-bold text-center p-5 text-gray-600">
            Web2 Using NextJS
          </h1>
        </div>

        {/* Course Card 3 */}
        <div className="w-full sm:w-[300px] bg-white rounded-lg shadow-2xl shadow-black cursor-pointer transition duration-200 ease-out hover:scale-105 hover:ease-in">
          <Image
            src="/programming_fundamentals.jpg"
            alt="Earn as You Learn"
            className="rounded-t-lg object-cover w-screen"
            width={300}
            height={200}
          />
          <h1 className="text-lg font-bold text-center p-5 text-gray-600">
            Earn as You Learn
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Courses;
