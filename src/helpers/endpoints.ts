export const generateQueryParams = (objectParams: object) => {
  const params = new URLSearchParams({ ...objectParams });
  return '?' + params.toString();
};
