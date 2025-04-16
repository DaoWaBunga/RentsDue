import React from "react";

const NotificationBar = ({ message }) => (
  <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 font-mono font-bold px-8 py-3 rounded-xl shadow-lg text-lg tracking-wide border-4 border-yellow-700 z-50">
    {message}
  </div>
);

export default NotificationBar; 