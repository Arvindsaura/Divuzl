import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ServiceCard = ({ service, onClick, isActive }) => {
  return (
    <div
      onClick={() => onClick(service)}
      className={`bg-white p-5 rounded-xl text-center shadow-md cursor-pointer transition-all duration-200 hover:bg-blue-50 hover:scale-105 ${
        isActive ? "ring-2 ring-blue-500" : ""
      }`}
    >
      <h3 className="text-lg font-semibold text-black">{service.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{service.description}</p>
      <div className="mt-4 text-blue-500 text-xl flex justify-center">
        <FaArrowUpRightFromSquare />
      </div>
    </div>
  );
};

export default ServiceCard;
