import { createImgURL } from "./createImgURL";

export const transformCastData = (data) => {
  return data.map((item) => {
    return { ...item, profile_path: createImgURL(item.profile_path, "person") };
  });
};
