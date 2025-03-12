import React from "react";

function About() {
  return (
    <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
      {/* Profile Image */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img 
          src="\GraduationPhoto.jpeg" // Replace with your actual image URL
          alt="Jordy Velinov"
          className="rounded-full shadow-lg w-48 h-48 md:w-64 md:h-64 object-cover"
        />
      </div>

      {/* About Me Text */}
      <div className="w-full md:w-2/3 md:ml-8 text-center md:text-left mt-6 md:mt-0">
        <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
        <p className="mt-4 text-gray-700 leading-relaxed text-lg">
          Hello! I'm <span className="font-semibold">Jordy Velinov</span>, a passionate Software Developer 
          specializing in Full-Stack Development. I thrive on building modern web applications and 
          solving challenging problems with clean, efficient code.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed text-lg">
          With experience in React and Vue.js, I enjoy creating user-friendly and 
          high-performance applications. My goal is to develop innovative solutions that enhance user 
          experiences and streamline workflows.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed text-lg">
          When I'm not coding, I love playing any kind of sports but specifically soccer, volleyball and basketball. I’m always 
          eager to learn and collaborate on exciting projects!
        </p>
      </div>
    </div>
  );
}

export default About;
