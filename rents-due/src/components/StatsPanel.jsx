import React from "react";

const StatsPanel = ({ bank, properties, satisfaction }) => (
  <div className="bg-yellow-800 border-4 border-yellow-600 rounded-xl p-4 w-56 text-right absolute top-6 right-8 shadow-lg">
    <div className="text-yellow-200 font-mono text-lg mb-2">Bank: <span className="font-bold">${bank.toLocaleString()}</span></div>
    <div className="text-yellow-200 font-mono text-lg mb-2">Properties: <span className="font-bold">{properties}</span></div>
    <div className="text-yellow-200 font-mono text-lg">Satisfied: <span className="font-bold">{satisfaction}%</span></div>
  </div>
);

export default StatsPanel; 