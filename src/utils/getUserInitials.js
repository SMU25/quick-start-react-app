export const getUserInitials = (firsName, lastName, defaultSymbol = "U") => {
  const userNameInitials = (firsName?.[0] || "") + (lastName?.[0] || "");

  return userNameInitials || defaultSymbol;
};
