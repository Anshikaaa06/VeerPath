import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Upskill() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const dummyCourses = [
      {
        id: 1,
        title: "Digital Marketing Mastery",
        description: "Learn to create and manage effective digital marketing campaigns.",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      },
      {
        id: 2,
        title: "Project Management Essentials",
        description: "Master the art of planning, executing, and closing projects successfully.",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
      },
      {
        id: 3,
        title: "Data Analysis Fundamentals",
        description: "Gain foundational knowledge in data analysis and interpretation.",
        image: "https://cdn-icons-png.flaticon.com/512/2721/2721295.png"
      },
      {
        id: 4,
        title: "Cybersecurity Awareness",
        description: "Understand and implement cybersecurity best practices.",
        image: "https://cdn-icons-png.flaticon.com/512/921/921347.png"
      },
      {
        id: 5,
        title: "Web Development Bootcamp",
        description: "Build responsive websites and web applications from scratch.",
        image: "https://cdn-icons-png.flaticon.com/512/2721/2721286.png"
      },
      {
        id: 6,
        title: "Financial Planning for Families",
        description: "Develop a solid financial plan to secure your family's future.",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      }
    ];

    setCourses(dummyCourses);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-md sticky top-0 bg-white z-50">
        <div className="flex items-center gap-2 font-bold text-xl">
          <span className="text-black font-bold">Veer</span>
          <span className="text-[#00E5BE]">Path</span>
        </div>
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><Link to="/job" className="hover:text-black">Jobs</Link></li>
          <li><Link to="/upskill" className="hover:text-black">Upskill</Link></li>
          <li><Link to="/scheme" className="hover:text-black">Schemes</Link></li>
          <li><Link to="/community" className="hover:text-black">Community</Link></li>
        </ul>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 pl-10 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00E5BE]"
            />
            <span className="absolute left-3 top-2.5 text-gray-400"></span>
          </div>
          <button className="bg-[#00E5BE] text-white px-4 py-2 rounded-full hover:bg-[#00cdae] transition">Sign Up</button>
          <button className="bg-gray-100 text-black px-4 py-2 rounded-full hover:bg-gray-200 transition">Login</button>
        </div>
      </nav>

      {/* Heading */}
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold">Empowering Futures Through Education</h1>
        <p className="text-gray-600 mt-2 px-4 md:px-0 max-w-3xl mx-auto">
          Explore our curated courses designed to help soldiers’ families thrive in their careers.
        </p>
      </div>

      {/* Search */}
      <div className="flex justify-center px-6 mb-10">
        <input
          type="text"
          placeholder="Search for courses by skills, duration, or popularity"
          className="w-full max-w-2xl px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00E5BE]"
        />
      </div>

      {/* Featured Courses Title */}
      <h2 className="text-xl font-semibold px-6 mb-4">Featured Courses</h2>

      {/* Scrollable Courses Grid */}
      <div className="flex overflow-x-auto space-x-4 px-6 pb-12">
        {courses.map((course) => (
          <div
            key={course.id}
            className="min-w-[240px] flex-shrink-0 bg-white p-4 rounded-lg border shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-32 object-contain mb-4 rounded"
            />
            <h3 className="font-semibold text-md text-black mb-1">{course.title}</h3>
            <p className="text-gray-600 text-sm">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Upskill;
