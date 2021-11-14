const withFonts = require('nextjs-fonts');
module.exports = withFonts({
  webpack(config, options) {
    return config;
  },
});
