import { useEffect, useState } from "react";

function Scheme() {
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/scheme")
      .then((res) => res.json()) 
      .then((data) => setSchemes(data)); 
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Government Scheme</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {schemes?.map((scheme) => (
          <div key={scheme._id} className="p-4 border rounded shadow">
            <h2>{scheme.name}</h2>
            <p>{scheme.description}</p>
            <a
              href={scheme.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 underline"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Scheme;
