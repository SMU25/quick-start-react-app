import React, { useEffect, useCallback, RefObject } from "react";

export const useClickOutside = (
  ref: RefObject<any>,
  callback: VoidFunction
) => {
  const handleClick: EventListener = useCallback(
    ({ target }) => {
      if (ref.current && !ref.current.contains(target)) {
        callback();
      }
    },
    [ref, callback]
  );

  useEffect(() => {
    document.getElementById("root").addEventListener("click", handleClick);
    return () => {
      document.getElementById("root").removeEventListener("click", handleClick);
    };
  }, [handleClick]);
};
