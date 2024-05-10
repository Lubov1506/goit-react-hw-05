export const createImgURL = (path) => {
  const basePath = "https://image.tmdb.org/t/p/w500";
  return path ? `${basePath}${path}` : "";
};
