import React from "react";

export default function ErrorMessage({ message }) {
  return (
    <p className="text-xs md:text-base py-3 bg-gradient-to-b from-gray-300 to-gray-400 dark:from-[#1e2024] dark:to-[#23272b] shadow-shadowLight dark:shadow-shadowDark text-center text-orange-500 tracking-wide animate-bounce">
      {message}
    </p>
  );
}
