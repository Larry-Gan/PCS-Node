const config = {
  port: parseInt(process.env.PORT || '', 10) || 5000,
  corsDomain: process.env.CORS_DOMAIN || '*',
};

export default config;
