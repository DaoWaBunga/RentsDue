import React from "react";

const ActionButtons = ({ onApprove, onDeny, onPostpone }) => (
  <div className="flex flex-col space-y-4 absolute bottom-24 right-8 w-40">
    <button
      className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded shadow-lg text-lg"
      onClick={onApprove}
    >
      Approve
    </button>
    <button
      className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 rounded shadow-lg text-lg"
      onClick={onDeny}
    >
      Deny
    </button>
    <button
      className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 rounded shadow-lg text-lg"
      onClick={onPostpone}
    >
      Postpone
    </button>
  </div>
);

export default ActionButtons; 