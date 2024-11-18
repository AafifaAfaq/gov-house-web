import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gray-200 w-full flex flex-col justify-center items-center mt-6 p-4">
      <div className="w-full sm:w-[90%] md:w-[80%] flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center gap-10 items-start">
        <div className="p-4">
          <ul className="leading-8">
            <li>
              <h1 className="font-bold text-xl pb-4">Core Courses</h1>
            </li>
            <li>
              <Link href="#">Programming Fundamentals</Link>
            </li>
            <li>
              <Link href="#">Web2 Using NextJS</Link>
            </li>
            <li>
              <Link href="#">Earn as You Learn</Link>
            </li>
          </ul>
        </div>

        <div className="p-4">
          <ul className="leading-8">
            <li>
              <h1 className="font-bold text-xl pb-4">Advanced Courses</h1>
            </li>
            <li>
              <Link href="#">Web 3 and Metaverse</Link>
            </li>
            <li>
              <Link href="#">Cloud-Native Computing</Link>
            </li>
            <li>
              <Link href="#">Artificial Intelligence (AI) and Deep Learning</Link>
            </li>
            <li>
              <Link href="#">Ambient Computing and IoT</Link>
            </li>
            <li>
              <Link href="#">Genomics and Bioinformatics</Link>
            </li>
            <li>
              <Link href="#">Network Programmability and Automation</Link>
            </li>
          </ul>
        </div>

        <div className="p-4">
          <h1 className="font-bold text-xl pb-4">Social Links</h1>
          <ul className="list-none flex flex-wrap justify-center space-x-4 mb-4">
            <li>
              <Link
                href="https://www.facebook.com/profile.php?id=100076095862479"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-white w-6 h-6 rounded-full bg-blue-800 p-1" />
              </Link>
            </li>

            <li>
              <Link
                href="https://www.youtube.com/@KamranTessorikk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-white w-6 h-6 rounded-full bg-red-600 p-1" />
              </Link>
            </li>

            <li>
              <Link href="" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-white w-6 h-6 rounded-full bg-blue-400 p-1" />
              </Link>
            </li>

            <li>
              <Link
                href="https://www.linkedin.com/in/shahid-khan-874078290/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BAeuUt6IPQ1qzhxCYISrgbQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-white w-6 h-6 rounded-full bg-black p-1" />
              </Link>
            </li>

            <li>
              <Link href="" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white w-6 h-6 rounded-full bg-pink-600 p-1" />
              </Link>
            </li>
          </ul>

          <ul className="flex items-center justify-center">
            <li className="flex items-center">
              <Link
                href="mailto:kamran@example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <FaRegEnvelope className="text-blue-500 w-6 h-6" />
                <span className="underline text-blue-500">
                  education@governorsindh.com
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
