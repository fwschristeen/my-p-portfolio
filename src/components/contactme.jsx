import React from "react";

const ContactMe = () => {
  return (
    <section id="contact" className="py-8 bg-[#f3f4f6] text-center mt-10 rounded-2xl mx-6 shadow">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <p className="text-center text-gray-600 mb-12">
          Currently seeking a challenging internship to gain hands-on experience and contribute to meaningful projects. Let’s connect!
        </p>

        <div className="space-y-6 text-center">
          <p>
            📧 Email:{" "}
            <a href="mailto:your.shenoli1120@gmail.com" className="text-blue-600 hover:underline">
              shenoli1120@gmail.com
            </a>
          </p>
          <p>
            💼 LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/shenoli-christeen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/shenoli-christeen
            </a>
          </p>
          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/fwschristeen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/fwschristeen
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
