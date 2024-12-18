export const getAssetPath = (path: string) => {
  console.log(`${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`);
  return `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;
};
