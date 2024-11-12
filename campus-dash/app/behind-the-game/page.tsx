import Image from 'next/image';

export default function BehindTheGame() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">
        Behind the Game
      </h1>

      <div className="mb-12">
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          Dive deep into the mechanics, playtesting, and development process of Campus Dash. Discover how we balanced gameplay elements and created an engaging experience.
        </p>
      </div>

      {/* Game Dynamics */}
      <section className="mb-16">
        <h2 className="section-title">Main Game Dynamics</h2>
        <div className="card">
          <h3 className="text-xl font-semibold text-black mb-4">Strategic Elements</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-black mb-2">Time Management</h4>
              <p className="text-gray-700">Players must balance speed with strategic decision-making, managing their 10-minute timer effectively.</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-black mb-2">Route Selection</h4>
              <p className="text-gray-700">Choose between the shorter, riskier path or the longer, safer route after reaching the decision point.</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-2 text-black">Player Interaction</h4>
              <p className="text-gray-700">Strategic use of blue cards to transfer disadvantages and form temporary alliances.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trade-offs */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[#B70915] mb-6">Trade-offs and Dilemmas</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-black mb-4">Key Decision Points</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-[#B70915] pl-4">
              <h4 className="font-semibold text-black mb-2">Time vs. Position</h4>
              <p className="text-gray-700">Each movement decision requires carefully weighing board position against the ticking 10-minute timer, creating tension between rushing forward and strategic positioning.</p>
            </div>
            <div className="border-l-4 border-[#B70915] pl-4">
              <h4 className="font-semibold text-black mb-2">Critical Path Choice</h4>
              <p className="text-gray-700">The mandatory stop point forces players to evaluate their current time and position when choosing between the shorter, riskier route or the longer, safer path.</p>
            </div>
            <div className="border-l-4 border-[#B70915] pl-4">
              <h4 className="font-semibold text-black mb-2">Risk Management</h4>
              <p className="text-gray-700">Every turn presents a choice between taking the safest route to the goal or deviating to potentially beneficial green squares, balancing guaranteed progress against possible advantages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Playtesting */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[#B70915] mb-6">Play Testing Insights</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-black mb-4">Key Findings</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Initial 10-minute timer required adjustment for game balance</li>
              <li>• Path difficulty levels were rebalanced based on player feedback</li>
              <li>• Card effects were modified to create more engaging gameplay</li>
            </ul>
          </div>
          <a 
            href="https://docs.google.com/document/d/15tp-jIUDuuL-k14NOhK5fVoR7OOcolsB0jWmNi8-DUI/edit?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#B70915] text-white px-4 py-2 rounded-lg hover:bg-[#8B0711] transition-colors w-full"
          >
            <span>View Complete Playtesting Log</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      {/* Game Balance */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[#B70915] mb-6">Quantitative Analysis</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-black mb-4">Key Metrics</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Strategic balance of squares (35% advantage, 22% disadvantage, 22% transfer, 22% neutral) creates dynamic gameplay paths</li>
              <li>• 10-minute base timer with card effects ranging from +60 seconds (green) to -60 seconds (red), average turn duration of ~5 seconds</li>
              <li>• Even distribution of 30 cards (10 each type) with balanced effects - movement cards (±1-6 squares) and time modifiers (15-60 seconds)</li>
            </ul>
          </div>
          <a 
            href="https://docs.google.com/document/d/1FW0O85huuXT-G0t7m5iHcozo5HzY_zmZFKBISXnP7ak/edit?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#B70915] text-white px-4 py-2 rounded-lg hover:bg-[#8B0711] transition-colors w-full"
          >
            <span>View Full Analysis</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      {/* Flow Charts */}
      <section className="mb-16">
        <h2 className="section-title">Game Flow</h2>
        <div className="card">
          <div className="relative w-full h-[400px] mb-4 bg-gray-200 rounded">
            <Image
                    src="/images/flowchart.png"
                    alt="Game Flow Chart"        
                    fill
                    className="object-contain"
                  />
          </div>
        </div>
      </section>
    </div>
  );
}