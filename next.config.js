module.exports = {
    experimental: { appDir: true, serverComponentsExternalPackages: ["mongoose"] },
    presets: ['next/babel', '@babel/preset-react'],
    webpack: (config) => {
      config.experiments = { ...config.experiments, topLevelAwait: true };
      return config;
    },
  };