import React from "react";

function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-600 mt-4">
        Hi, I'm <span className="font-semibold">Jordy Velinov</span>, a passionate <span className="text-blue-500">Software Developer</span>.
      </p>
      <a
        href="/projects"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        View My Work
      </a>
    </div>
  );
}

export default Home;
