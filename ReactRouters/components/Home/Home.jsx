import { Link } from "react-router-dom";
import React from "react";

function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            Download Now
          </h1>

          <p className="text-gray-500 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            voluptate.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition"
          >
            Download Now
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="hero"
            className="w-80 md:w-[420px] rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="text-center py-16 bg-gray-50">
        <img
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="remote"
          className="mx-auto w-52 md:w-96 rounded-2xl shadow-lg"
        />

        <h2 className="text-3xl md:text-5xl font-semibold mt-10">
          Lorem Ipsum Yojo
        </h2>
      </section>
    </div>
  );
}

export default Home;
