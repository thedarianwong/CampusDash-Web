export default function HowToPlay() {
  const rulebookUrl = "https://docs.google.com/presentation/d/1dXyM7PZlQbKm8CfzsMAsGLZYDrzh-TnJDJe9uc7Jv7M/edit?usp=sharing";
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#B70915] mb-8 text-center">
          How to Play Campus Dash
        </h1>
  
        {/* Rules Overview */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-[#B70915] mb-4">Basic Rules</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Get ready for an exciting race across campus! Each player has 10 minutes to reach their classroom. Here's how to play:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Start your timer when you roll the dice</li>
              <li>Move your piece according to the dice roll</li>
              <li>Draw cards based on the square you land on</li>
              <li>Manage your time wisely</li>
              <li>First to reach the destination wins!</li>
            </ul>
          </div>
        </div>
  
        {/* Square Types */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#B70915] mb-4">Square Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-8 h-8 bg-green-500 rounded mb-2"></div>
              <h3 className="text-lg font-semibold text-black mb-2">Green Squares</h3>
              <p className="text-gray-700">Draw an advantage card to help your journey.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-8 h-8 bg-red-500 rounded mb-2"></div>
              <h3 className="text-lg font-semibold text-black mb-2">Red Squares</h3>
              <p className="text-gray-700">Draw a disadvantage card that might slow you down.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-8 h-8 bg-blue-500 rounded mb-2"></div>
              <h3 className="text-lg font-semibold text-black mb-2">Blue Squares</h3>
              <p className="text-gray-700">Transfer a disadvantage to another player.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-8 h-8 bg-gray-800 rounded mb-2"></div>
              <h3 className="text-lg font-semibold text-black mb-2">Black Squares</h3>
              <p className="text-gray-700">Safe squares - nothing happens here.</p>
            </div>
          </div>
        </div>
  
        {/* Download Rules */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#B70915] mb-4">Complete Rules</h2>
          <a 
            href={rulebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#B70915] text-white px-6 py-3 rounded-lg hover:bg-[#8B0711] transition-colors"
          >
            <span>View Rulebook</span>
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