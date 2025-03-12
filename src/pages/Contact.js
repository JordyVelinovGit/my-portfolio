import React from "react";

function Contact() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Contact Me</h1>
      <p className="mt-4 text-gray-700">Feel free to reach out to me:</p>
      <div className="mt-6 space-y-3">
        <p>Email: <span className="font-semibold">Jordy@Velinovi.com</span></p>
        <p>GitHub: <a href="https://github.com/JordyVelinovGit" className="text-blue-600 hover:underline">JordyVelinovGit</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/jordy-velinov" className="text-blue-600 hover:underline">Jordy-Velinov</a></p>
      </div>
    </div>
  );
}

export default Contact;
