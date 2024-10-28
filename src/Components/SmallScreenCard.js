// SmallScreenCard.js
import React from "react";

export function SmallScreenCard({ title, description, image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-full p-4 mb-4 flex flex-col items-center bg-gray-200 rounded-lg shadow-lg"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="mt-4 text-lg font-bold text-black">{title}</h3>
      <p className="mt-2 text-gray-700">{description}</p>
    </div>
  );
}
