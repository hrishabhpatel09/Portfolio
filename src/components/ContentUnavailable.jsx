import React from 'react';
import { FaFish } from 'react-icons/fa';

const ContentUnavailable = ({ pageName }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 font-poetsen">
      <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl">
        <div className="relative inline-block">
          <FaFish className="text-8xl text-indigo-400 animate-bounce" />
        </div>
        <h1 className="text-4xl font-bold mt-8">Content for {pageName} is on its way!</h1>
        <p className="text-xl mt-4">
          Still fishing for some great content for this page. Please check back later!
        </p>
      </div>
    </div>
  );
};

export default ContentUnavailable;