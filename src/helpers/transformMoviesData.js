import { createImgURL } from "./createImgURL";

export const transformMoviesData = (data) => {
  return data.map(
    ({
      id,
      title,
      vote_average,
      overview,
      poster_path,
      vote_count,
      backdrop_path,
      genres = [],
      original_title = "",
      production_countries = [],
      production_companies = [],
    }) => {
      return {
        id,
        title,
        vote_average,
        overview,
        vote_count,
        poster: createImgURL(poster_path),
        back: createImgURL(backdrop_path),
        genres,
        original_title,
        production_countries,
        production_companies,
      };
    }
  );
};
