export const textCut = (str, limit = 250) => {
  return str.length > limit ? `${str.slice(0, limit)} ...` : str;
};
