import React from 'react';
import Image from 'next/image';

const actionCardsUrl = "https://docs.google.com/document/d/1HCzEvwX47ckKZvXcWQNdR6WAvTgMGT29ZH5N_F8WLHY/edit?usp=sharing";
const DownloadButton = ({ url, label }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 bg-[#B70915] text-white px-4 py-2 rounded-lg hover:bg-[#8B0711] transition-colors w-full"
  >
    <span>{label}</span>
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  </a>
);

const getTokenImagePath = (name) => {
  const tokenMap = {
    'Terry Fox': '/images/fox.png',
    'Maggie Benston': '/images/benston.png',
    'Gordon Shrum': '/images/shrum.png',
    'Robert C. Brown': '/images/brown.png'
  };
  return tokenMap[name];
};

export default function PrintNow() {
  // Replace these URLs with your actual Google Drive or cloud storage links
  const downloadUrls = {
    gameBoard: "https://drive.google.com/uc?export=download&id=1fNmxqS56Trz_d_NGo9TJo81tLV72_p_n", 
    greenCards: "https://drive.google.com/uc?export=download&id=1RNpqbCdHIIIo8BFeQxDnuzy_MaWuO",
    redCards: "https://drive.google.com/uc?export=download&id=18J3cY1qGLVdRtQ9XgaZZ4-Xn6oyTbzgu",
    blueCards: "https://drive.google.com/uc?export=download&id=17mMBC4l1MUf3bnNBQpvFsnY_",
    characters: {
      terryFox: "https://drive.google.com/uc?export=download&id=1WCWHqIM0dCAGxOmBb4b3x35mNCnqd7FD",
      maggieBenston: "https://drive.google.com/uc?export=download&id=15njlDZWue4PZ6wQeDiczDtT4LCTI1iq1",
      gordonShrum: "https://drive.google.com/uc?export=download&id=1Q1Wk6j0d7XJ1qiNd9OcCbsJtFlkkdeyt",
      robertBrown: "https://drive.google.com/uc?export=download&id=1froVfpMoMoOjr2JYTzpbm27dR7NfnOWF",
    }
  };

  const characters = [
    { name: 'Terry Fox', url: downloadUrls.characters.terryFox },
    { name: 'Maggie Benston', url: downloadUrls.characters.maggieBenston },
    { name: 'Gordon Shrum', url: downloadUrls.characters.gordonShrum },
    { name: 'Robert C. Brown', url: downloadUrls.characters.robertBrown },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-[#B70915] mb-8 text-center">
        Print & Play Materials
      </h1>

      <div className="mb-12">
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          Ready to start your campus adventure? Download and print all the necessary game components below. Make sure to have a 6-sided die and stopwatch ready!
        </p>
      </div>

      {/* Game Board Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[#B70915] mb-6">Game Board</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="relative w-full aspect-[16/9] mb-4 bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/images/board.png"
              alt="Game Board"
              fill
              className="object-contain"
            />
          </div>
          <DownloadButton url={downloadUrls.gameBoard} label="Download Game Board (PDF)" />
        </div>
      </section>

      {/* Cards Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[#B70915] mb-6">Game Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Green Cards */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Advantage Cards</h3>
            <div className="relative w-full aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/images/green.png"
                alt="Green Cards Preview"
                fill
                className="object-contain"
              />
            </div>
            <DownloadButton url={downloadUrls.greenCards} label="Download Green Cards" />
          </div>

          {/* Red Cards */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-red-600 mb-4">Disadvantage Cards</h3>
            <div className="relative w-full aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/images/red.png"
                alt="Red Cards Preview"
                fill
                className="object-contain"
              />
            </div>
            <DownloadButton url={downloadUrls.redCards} label="Download Red Cards" />
          </div>

          {/* Blue Cards */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Transfer Cards</h3>
            <div className="relative w-full aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/images/blue.png"
                alt="Blue Cards Preview"
                fill
                className="object-contain"
              />
            </div>
            <DownloadButton url={downloadUrls.blueCards} label="Download Blue Cards" />
          </div>
        </div>
      </section>

      {/* Player Pieces */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[#B70915] mb-6">Player Pieces</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {characters.map((character) => (
            <div key={character.name} className="bg-white p-6 text-black rounded-lg shadow-md">
              <div className="relative w-full aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={getTokenImagePath(character.name)}
                  alt={`${character.name} Token`}          
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center font-semibold mb-2">{character.name}</p>
              <DownloadButton url={character.url} label="Download Token" />
            </div>
          ))}
        </div>
      </section>
      <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#B70915] mb-4">Action Cards List</h2>
          <a 
            href={actionCardsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#B70915] text-white px-6 py-3 rounded-lg hover:bg-[#8B0711] transition-colors"
          >
            <span>View Card List</span>
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
    </div>
  );
}