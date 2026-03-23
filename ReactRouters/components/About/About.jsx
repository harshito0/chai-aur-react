import React from "react";
// download image and place in assets

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* IMAGE */}
          <div className="md:w-5/12">
            <img
              src="https://images.pexels.com/photos/11035411/pexels-photo-11035411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="about"
              className="w-full"
            />
          </div>

          {/* CONTENT */}
          <div className="md:w-7/12 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
              React development is carried out by passionate developers
            </h2>

            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis
              voluptatem accusantium nemo perspiciatis delectus.
            </p>

            <p className="text-gray-500">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at asperiores nemo possimus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
