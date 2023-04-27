import React, { useEffect, useCallback } from "react";

export const useClickOutside = (ref, callback) => {
  const handleClick = useCallback(
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
