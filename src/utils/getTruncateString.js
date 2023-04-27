export const getTruncateString = (str, maxCountSymbols) =>
  str?.length > maxCountSymbols ? `${str.slice(0, maxCountSymbols)}...` : str;
