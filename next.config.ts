import { NextConfig } from "next";

const isInDevMode = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = { 
  output: "export", 
  basePath: isInDevMode ? '' :  "/motion-ws-examples",
};

export default nextConfig;