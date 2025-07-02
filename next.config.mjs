

import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new NodePolyfillPlugin({
        excludeAliases: ['console', 'fs']
      })
    );
    
    config.resolve.fallback = {
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util/')
    };

    return config;
  }
};

export default nextConfig;