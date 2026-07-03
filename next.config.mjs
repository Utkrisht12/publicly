/** @type {import('next').NextConfig} */
const repoName = "publicly";

const nextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: { unoptimized: true },
};

export default nextConfig;
