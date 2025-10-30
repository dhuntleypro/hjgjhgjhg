const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Fix for tslib __extends destructuring error on web
config.resolver.alias = {
  ...config.resolver.alias,
  'tslib': require.resolve('tslib/tslib.es6.js'),
};

// Ensure proper module resolution for web
config.resolver.resolverMainFields = ['react-native', 'browser', 'main'];

// Transform tslib for web compatibility
config.transformer = {
  ...config.transformer,
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: true,
    },
  }),
};

module.exports = config;
