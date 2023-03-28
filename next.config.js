/** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
//   compiler: {
//     styledComponents: true,
//   },
// };

const nextConfig = {
  output: "export",
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

module.exports = nextConfig;
