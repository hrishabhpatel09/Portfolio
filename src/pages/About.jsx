import React from 'react';
import img from '../assets/profile.jpg'
import { FaUser, FaCode, FaProjectDiagram, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen font-poetsen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white sm:text-6xl">
            About Me
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            A passionate developer on a mission to build amazing things.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <FaUser className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Who I Am</h2>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                  I'm a Full Stack Web Developer with a passion for creating beautiful, functional, and user-centered digital experiences. I'm a quick learner and a team player who is always looking for new challenges.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <FaCode className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">What I Do</h2>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                  I specialize in the MERN stack (MongoDB, Express, React, Node.js), but I'm always eager to learn new technologies. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <FaProjectDiagram className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">My Philosophy</h2>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                  I believe that great software is not just about code, but about understanding the user's needs and creating a product that is both useful and enjoyable to use. I strive to write clean, maintainable, and efficient code.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex items-start">
                <div className="flex-shrink-0">
                    <FaGraduationCap className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="ml-4">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h2>
                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                    I am currently pursuing my Bachelor's degree in Computer Science and Engineering from IIT ISM Dhanbad. I am in my prefinal year and will be graduating in 2027.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
