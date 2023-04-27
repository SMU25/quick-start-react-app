import React, { FC } from "react";
import cn from "classnames";
import { getRandomFromSelectValues } from "src/utils/getRandomFromSelectValues";
import { Sizes } from "src/types/sizes";
import { COLORS_LIST, AVATAR_SIZES } from "./constants";

const AVATAR_ALT_TEXT = "profile image";

const DEFAULT_CLASSNAME = cn(
  "rounded-full",
  getRandomFromSelectValues(COLORS_LIST)
);

interface Props {
  size?: Sizes;
  imgUrl?: string;
  className?: string;
  userInitials?: string;
}

export const Avatar: FC<Props> = ({
  size = AVATAR_SIZES[Sizes.S],
  imgUrl,
  className,
  userInitials,
}) => {
  const combinedClassNames = cn(DEFAULT_CLASSNAME, className, size);

  if (imgUrl)
    return (
      <img className={combinedClassNames} src={imgUrl} alt={AVATAR_ALT_TEXT} />
    );

  return (
    <span
      className={cn(
        `flex items-center justify-center uppercase font-semibold`,
        combinedClassNames
      )}
    >
      {userInitials}
    </span>
  );
};
