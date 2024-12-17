// 获取资源的基础路径
export const getAssetPath = (path: string) => {
  // 开发环境直接返回路径
  if (import.meta.env.DEV) {
    return path;
  }
  // 生产环境添加前缀
  return `/yakiniku-react${path}`;
};
