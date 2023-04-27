export const getUserInitials = (
  firsName: string,
  lastName: string,
  defaultSymbol: string = "U"
) => {
  const userNameInitials = (firsName?.[0] || "") + (lastName?.[0] || "");

  return userNameInitials || defaultSymbol;
};
