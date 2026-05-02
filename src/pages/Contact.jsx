import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen font-poetsen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white sm:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            I'd love to hear from you! Whether you have a question or just want to say hi, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FaEnvelope className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Email</h2>
                <a href="mailto:hrishabhpatel2023@gmail.com" className="text-lg text-gray-600 dark:text-gray-400 hover:text-indigo-600">
                  hrishabhpatel2023@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FaPhone className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Phone</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">+91 96852 XXXXX</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FaMapMarkerAlt className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Location</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">Dhanbad, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Send a Message</h2>
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="block w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="block w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
