export default function Home() {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/background.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center">
        {/* Heading */}
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Unlock Your Potential With Our Extensive Collection Of Free Online Courses
        </h1>

        {/* Subheading */}
        <p className="text-white text-lg md:text-xl mb-8">
          Suspendisse Potenti. In Eget Augue Egestas, Gravida Libero Eu, Luctus Ipsum. Aliquam Non Pulvinar Ex.
        </p>

        {/* Search Bar */}
        <div className="flex w-full max-w-lg bg-white p-2 rounded-full shadow-lg">
          <input
            type="text"
            placeholder="Search Courses..."
            className="flex-grow p-2 pl-4 text-gray-700 rounded-l-full focus:outline-none"
          />
          <button className="bg-blue-600 text-white rounded-full px-4 py-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M3 10.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
              />
            </svg>
            <span className="ml-2">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}
