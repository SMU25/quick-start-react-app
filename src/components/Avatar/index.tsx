import React, { FC } from "react";
import { getRandomFromSelectValues } from "src/utils/getRandomFromSelectValues";
import { COLORS_LIST } from "./constants";

const AVATAR_ALT_TEXT = "profile image";

interface Props {
  imgUrl?: string;
  className?: string;
  userInitials?: string;
}

export const Avatar: FC<Props> = ({ imgUrl, className, userInitials }) => {
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
