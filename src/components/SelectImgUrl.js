export const SelectImgUrl = url => {
  let s = {
    background: `url(https://image.tmdb.org/t/p/${url}) no-repeat center/cover`,
    filter: "brightness(.8)",
    opacity: 0.7
  };
  return s;
};
