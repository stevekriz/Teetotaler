module.exports = {
  resolver: {
    blacklistRE: /#current-cloud-backend\/.*/,
  },
  transformer: {
    assetPlugins: ["expo-asset/tools/hashAssetFiles"],
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
