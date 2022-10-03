export function getyearsandmonths(totmonths) {
  const years = (totmonths / 12) | 0;
  const months = totmonths % 12;
  return { years, months };
}
