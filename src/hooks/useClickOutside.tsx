import React, { useEffect, RefObject } from "react";

export const useClickOutside = (
  ref: RefObject<any>,
  callback: VoidFunction
) => {
  const handleClick: EventListener = ({ target }) => {
    if (ref.current && !ref.current.contains(target)) {
      callback();
    }
  };

  useEffect(() => {
    document.getElementById("root").addEventListener("click", handleClick);
    return () => {
      document.getElementById("root").removeEventListener("click", handleClick);
    };
  });
};
