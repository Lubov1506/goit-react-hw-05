export const createImgURL = (path) => {
  const basePath = "https://image.tmdb.org/t/p/w500";
  return path
    ? `${basePath}${path}`
    : "https://sundries.ua/wp-content/uploads/2023/12/netflix.jpg";
};
