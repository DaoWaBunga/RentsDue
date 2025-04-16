import React from "react";

const RequestQueue = ({ queue, onSelect, selectedId }) => (
  <div className="bg-yellow-900 border-4 border-yellow-600 rounded-xl p-4 w-64 min-h-[300px] flex flex-col items-center">
    <h3 className="text-lg font-bold text-yellow-200 mb-4 tracking-widest">REQUESTS</h3>
    <ul className="w-full space-y-2">
      {queue.map((req) => (
        <li
          key={req.id}
          className={`bg-yellow-100 rounded p-2 cursor-pointer font-mono text-yellow-900 border-2 border-yellow-700 ${selectedId === req.id ? 'bg-yellow-300 border-yellow-900' : ''}`}
          onClick={() => onSelect(req.id)}
        >
          Hire {req.type} for unit #{req.unit}
        </li>
      ))}
    </ul>
  </div>
);

export default RequestQueue; 