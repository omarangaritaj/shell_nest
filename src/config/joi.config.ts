import * as Joi from 'joi';

export const JoiConfigSchema = Joi.object({
  // CLOUDINARY_API_KEY: Joi.string(),
  // CLOUDINARY_CLOUD_NAME: Joi.string(),
  // CLOUDINARY_SECRET: Joi.string(),
  // FACEBOOK_APP_ID: Joi.string(),
  // FACEBOOK_APP_SECRET: Joi.string(),
  FRONTEND_URL: Joi.string().default(`http://localhost:3000`),
  // GITHUB_CLIENT_ID: Joi.string(),
  // GITHUB_CLIENT_SECRET: Joi.string(),
  // GOOGLE_CLIENT_ID: Joi.string(),
  // GOOGLE_CLIENT_SECRET: Joi.string(),
  // MAILGUN_API_KEY: Joi.string(),
  // MAILGUN_DOMAIN: Joi.string(),
  MONGO_URL: Joi.string().required(),
  NODE_ENV: Joi.string().default('dev'),
  PORT: Joi.number().required().default(3001),
  SECRET_PRIVATE_KEY: Joi.string().required(),
  // SECURE_APP: Joi.boolean().default(false),
});
