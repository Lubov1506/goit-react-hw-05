const types = {
  movie: "https://sundries.ua/wp-content/uploads/2023/12/netflix.jpg",
  person:
    "https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-yellow-smiley-face-png-image_960886.jpg",
};

export const createImgURL = (path, type = "movie") => {
  const basePath = "https://image.tmdb.org/t/p/w500";
  return path ? `${basePath}${path}` : types[type];
};
