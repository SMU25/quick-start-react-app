import React, { FC } from "react";

const ARRAY_NUMBERS = [1, 2, 3];

interface Props {
  className?: string;
  setIsOpen: (isOpen: boolean | ((isOpen: boolean) => void)) => void;
}

export const BurgetButton: FC<Props> = ({ className, setIsOpen }) => {
  const toggleIsOpen: VoidFunction = () => setIsOpen((prev) => !prev);

  return (
    <button className={className} onClick={toggleIsOpen}>
      {ARRAY_NUMBERS.map((item) => (
        <div key={item} className="" />
      ))}
    </button>
  );
};
