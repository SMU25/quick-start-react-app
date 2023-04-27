import React from "react";

const ARRAY_NUMBERS = [1, 2, 3];

export const BurgetButton = ({ className, setIsOpen }) => {
  const toggleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <button className={className} onClick={toggleIsOpen}>
      {ARRAY_NUMBERS.map((item) => (
        <div key={item} className="" />
      ))}
    </button>
  );
};
