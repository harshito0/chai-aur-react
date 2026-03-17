import React from "react";

function Card({ username, btnText, title, img }) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300">
      <img className="w-full h-48 object-cover" src={img} alt="card" />

      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-600 text-base">{username}</p>
      </div>

      <div className="px-6 pb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;
