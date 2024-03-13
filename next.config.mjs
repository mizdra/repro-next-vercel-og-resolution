/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, ctx) {
    config.module.rules.push({
      test: /\.tsx$/,
      use: ["echo-loader"],
    });
    return config;
  },
};

export default nextConfig;
