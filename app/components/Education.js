import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Education</h2>
        <div className="mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Graphic Era Hill University</h3>
            <p className="text-gray-600">Master of Computer Applications (2021-2023)</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mt-4">
            <h3 className="text-xl font-bold">Kumaun University</h3>
            <p className="text-gray-600">Bachelor of Science in Computer Science (2018-2021)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
