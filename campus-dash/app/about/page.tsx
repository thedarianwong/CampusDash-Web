export default function About() {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#B70915] mb-8 text-center">
          About Campus Dash
        </h1>
  
        {/* Game Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#B70915] mb-4">Game Overview</h2>
          <p className="text-gray-700 mb-4">
            Campus Dash: The Race to Class is a time-pressured board game simulating the chaotic rush to class on a bustling university campus. Players must strategically navigate through crowds, avoid obstacles, and make quick decisions to reach their destination before time runs out.
          </p>
        </section>
  
        {/* Game Pillars */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#B70915] mb-4">Game Pillars</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#B70915] mb-2">What</h3>
              <p className="text-gray-700">A time-pressured board game simulating the chaotic rush to class on a bustling university campus.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#B70915] mb-2">How</h3>
              <p className="text-gray-700">Players strategically navigate a board filled with obstacles and opportunities, managing their limited time and interacting with other players through card-based events.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#B70915] mb-2">Why</h3>
              <p className="text-gray-700">To create an engaging, relatable experience that captures the frantic energy and unpredictability of campus life while encouraging quick thinking and decision-making.</p>
            </div>
          </div>
        </section>
  
        {/* Characters */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#B70915] mb-4">Meet the Characters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#B70915] mb-2">Terry Fox</h3>
              <p className="text-gray-700">The Determined Runner - Named after SFU's most inspiring alumnus, this character never gives up no matter how far behind they might fall.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#B70915] mb-2">Maggie Benston</h3>
              <p className="text-gray-700">The Strategic Pioneer - One of SFU's founding faculty members, this character excels at creative problem-solving. </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#B70915] mb-2">Gordon Shrum</h3>
              <p className="text-gray-700">The Campus Builder - Named after SFU's first Chancellor, this character knows every corner of the campus. </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#B70915] mb-2">Robert C. Brown</h3>
              <p className="text-gray-700">The Research Expert - Representing SFU's first Dean of Graduate Studies, this character is methodical and well-prepared. </p>
            </div>
          </div>
        </section>
      </div>
    );
  }