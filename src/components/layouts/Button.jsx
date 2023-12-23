import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <button onClick={onClick}
    className="button-gradient tracking-wide w-[120px] h-[40px] text-sm text-designColor dark:hover:text-textColor-light hover:text-textColor-dark mdl:text-base mdl:w-[130px] mdl:h-[40px] border border-designColor hover:border-none hover:outline-none bg-bodyColor-light after:bg-bodyColor-light dark:bg-bodyColor-dark after:dark:bg-bodyColor-dark">
      {title}
    </button>
  );
};

export default Button;
