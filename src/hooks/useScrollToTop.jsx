import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";

const useScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollToTop);
    return function cleanup() {
      window.removeEventListener("scroll", scrollToTop);
    };
  });

  const scrollToTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", scrollToTop);

  return (
    <>
      <FiChevronUp
        className="scrollToTop h-10 w-10 md:h-12 md:w-12 right-8 bottom-8 md:right-16 md:bottom-16 xl:right-20 xl:bottom-20 bg-primary-light text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200 bg-[#E5E5E5] dark:bg-black dark:bg-opacity-25 shadow-sm rounded-xl cursor-pointer"
        onClick={backToTop}
        style={{
          borderRadius: 50,
          display: showScroll ? "flex" : "none",
          padding: 5,
        }}
      />
    </>
  );
};

export default useScrollToTop;
