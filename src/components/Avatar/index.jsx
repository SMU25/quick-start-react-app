import React from "react";
import { getRandomFromSelectValues } from "utils/getRandomFromSelectValues";
import { COLORS_LIST } from "./constants";

const AVATAR_ALT_TEXT = "profile image";

export const Avatar = ({ imgUrl, className, userInitials }) => {
  if (imgUrl)
    return <img className={className} src={imgUrl} alt={AVATAR_ALT_TEXT} />;

  return (
    <span
      style={{ backgroundColor: getRandomFromSelectValues(COLORS_LIST) }}
      className={className}
    >
      {userInitials}
    </span>
  );
};
