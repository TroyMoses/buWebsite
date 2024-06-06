/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other configurations (if any)
  experimental: {
    serverActions: true
  },
  
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: 'file-loader',
    });

    return config;
  },
};

module.exports = nextConfig;
