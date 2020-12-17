export default function getFormattedDate(value, padding = true, slash = false) {
  const divider = slash ? '/' : '-';
  const date = new Date(value);
  let da = date.getDate().toString();
  const ye = date.getFullYear().toString();
  let mo = (date.getMonth() + 1).toString();

  da = da.length < 2 ? '0' + da : da;
  mo = mo.length < 2 ? '0' + mo : mo;

  return padding
    ? `${da} ${divider} ${mo} ${divider} ${ye}`
    : `${da}${divider}${mo}${divider}${ye}`;
}
