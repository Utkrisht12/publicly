/** @type {import('next').NextConfig} */
const repoName = "publicly";
const isGitHubPages = process.env.DEPLOY_TARGET === "github-pages";

const nextConfig = {
  output: "export",
  ...(isGitHubPages && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),
  images: { unoptimized: true },
};

export default nextConfig;
