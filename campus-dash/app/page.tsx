import Image from 'next/image';
import React from 'react';

const completeGame = "https://docs.google.com/document/d/18-JHfjA8M-eVL_1rJ0BIZ10SVa3Cy8h2fddrJaIIgiE/edit?usp=sharing"
const videoUrl = "https://drive.google.com/file/d/1mg3mEGXoV88OS5oiFWhqvT7I7WaBtBHr/preview";
export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#B70915] mb-6">
          Campus Dash: The Race to Class
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Experience the thrilling rush of racing across campus to make it to class on time! Can you navigate through crowds, avoid distractions, and beat the clock?
        </p>
      </div>

      {/* Game Banner/Hero Image */}
      <div className="relative w-full h-[400px] mb-12 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">Game Banner Image</p>
          {
            <Image
            src="/images/banner.jpg"
            alt="Campus Dash Banner"
            fill
            className="object-cover"
          />}
        </div>
      </div>

      <div className="text-center">
          <h2 className="text-3xl font-semibold text-[#B70915] mb-4 text-center">Board Game Preproduction Prototype</h2>
          <a 
            href={completeGame}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#B70915] text-white px-6 py-3 rounded-lg hover:bg-[#8B0711] transition-colors"
          >
            <span>Board Game Preproduction Prototype</span>
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
          </a>
        </div>

      {/* Video Section */}
      <div className="mt-12 mb-12">
        <h2 className="text-3xl font-semibold text-[#B70915] mb-4 text-center">
          Watch the Trailer
        </h2>
        <div className="w-full max-w-4xl mx-auto">
          <div className="relative w-full pb-[56.25%]">
            <iframe
              src={videoUrl}
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              allow="autoplay"
              allowFullScreen
            />
          </div>
          <p className="mt-2 text-sm text-gray-600 text-center">
            If the video doesn't load, you can {' '}
            <a 
              href={videoUrl.replace('/preview', '/view')}
              className="text-blue-500 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              view it directly on Google Drive
            </a>
          </p>
        </div>
      </div>

      {/* Quick Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-[#B70915] mb-3">2-4 Players</h3>
          <p className="text-gray-600">Compete with friends in this exciting race against time!</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-[#B70915] mb-3">10 Minute Timer</h3>
          <p className="text-gray-600">Make strategic decisions as your time ticks away.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-[#B70915] mb-3">Multiple Paths</h3>
          <p className="text-gray-600">Choose your route wisely to reach your destination!</p>
        </div>
      </div>
    </div>
  );
}