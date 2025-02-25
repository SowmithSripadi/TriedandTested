import React from "react";

export default function ProgressBar({ progress }) {
  return (
    <div className="flex gap-1 items-center">
      <div className="progressBar h-2 w-24 mt-1 rounded-lg bg-gray-300 overflow-hidden">
        <div
          className="progressBarFill h-full bg-[#2ecc71] rounded-lg transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {progress == 0 ? (
        <span className="text-xs">Upload Progress</span>
      ) : (
        <span className="text-xs">{progress}%</span>
      )}
    </div>
  );
}
