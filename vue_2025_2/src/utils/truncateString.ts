export const truncateString = (str: string, n: number) => {
  if (str.length <= n) return str;
  return str.slice(0, n) + '...';
};
