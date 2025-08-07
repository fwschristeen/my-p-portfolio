import react from "react";

const Education = ()  => { 
    return (
<section id="Education" className="py-8 bg-[#f3f4f6] text-center mt-10 rounded-2xl mx-6 shadow">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-lg text-gray-800 font-semibold uppercase mb-4">Educational Qualifications</h2>

    <div className="space-y-8">
      {/* Degree 1 */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold">BSc (Hons) Software Engineering</h3>
        <p className="text-gray-600">Plymouth University, UK (2023 – Present)</p>
        <p className="text-gray-700 mt-2">
          Currently pursuing. Focused on UI/UX, frontend development, and mobile application development.
        </p>
      </div>

      {/* Degree 2 */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold">Higher Diploma in Software Development</h3>
        <p className="text-gray-600">INFORMATICS(2021 – 2022)</p>
        <p className="text-gray-700 mt-2">
          Covered software develpment systems includes real client project practicals.
        </p>
      </div>

       {/* Degree 3 */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold">English Diploma </h3>
        <p className="text-gray-600">Aquinas College of Higher Studies(2023 – 2024)</p>
        <p className="text-gray-700 mt-2">
          Covered English language and Litreture 
        </p>
      </div>

        {/* Degree 4 */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold">Industry Preparetion Training(IPT)Program </h3>
        <p className="text-gray-600">NSBM Green University(2025)</p>
        <p className="text-gray-700 mt-2">
          Gain practicals into IT industry, sharpen technical and professional skills and better understand the expectation of real-world workloads.
        </p>
      </div>

      {/* Degree 5 */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold">G.C.E.Advanced Level </h3>
        <p className="text-gray-600">Holy Family Convent(2022-2020)</p>
        <p className="text-gray-700 mt-2">
          3 A's in Commerce Section(Accounting,Econ,IT)
        </p>
      </div>

       {/* Degree 6 */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold">G.C.E.Ordinary Level </h3>
        <p className="text-gray-600">Holy Family Convent(2018-2019)</p>
        <p className="text-gray-700 mt-2">
          7 A's 2 B's
        </p>
      </div>

      
    </div>
  </div>
</section>
    );
};



export default Education;