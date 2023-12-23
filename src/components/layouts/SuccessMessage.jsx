import React from "react";

export default function SuccessMessage({ message }) {
  return (
    <p className="py-3 text-xs md:text-base  bg-gradient-to-r from-gray-300  to-gray-200 dark:from-[#1e2024] dark:to-[#23272b] shadow-shadowLight dark:shadow-shadowDark text-center text-green-500 tracking-wide animate-bounce">
      {message}
    </p>
  );
}
