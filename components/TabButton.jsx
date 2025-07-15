import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button
      onClick={selectTab}
      className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
        active
          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
          : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white border border-slate-700"
      }`}
    >
      {children}
    </button>
  );
};

export default TabButton;
