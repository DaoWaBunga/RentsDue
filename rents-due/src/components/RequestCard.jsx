import React from "react";

const RequestCard = ({ request }) => {
  if (!request) return null;
  return (
    <div className="bg-yellow-900 border-4 border-yellow-600 rounded-xl p-6 w-full max-w-xl mx-auto shadow-lg flex flex-col items-center">
      <div className="bg-yellow-200 rounded-t-lg w-full py-2 px-4 text-center border-b-2 border-yellow-700">
        <h2 className="text-2xl font-bold tracking-widest text-yellow-900">{request.type.toUpperCase()}</h2>
      </div>
      <div className="bg-yellow-100 w-full p-4 rounded-b-lg text-left mt-2">
        <p className="text-xl font-mono text-yellow-900 mb-2">{request.description}</p>
        <p className="text-lg font-bold text-yellow-800">Cost: ${request.cost}</p>
      </div>
    </div>
  );
};

export default RequestCard; 