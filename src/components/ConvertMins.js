export function ConvertMins(mins) {
  let h = mins / 60;
  let rh = Math.floor(h);
  let m = (h - rh) * 60;
  let rm = Math.round(m);
  return rh + "." + rm;
}
