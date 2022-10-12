export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGO_URL,
  port: process.env.PORT || 3000,
});
