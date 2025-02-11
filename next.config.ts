import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // config for github pages, howto: https://www.freecodecamp.org/news/how-to-deploy-next-js-app-to-github-pages/
  basePath: "/motion-ws-examples",
  output: "export",
  // not sure if the strictmode is needed for that or just a good default?
  reactStrictMode: true
};

export default nextConfig;
