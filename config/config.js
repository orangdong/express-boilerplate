import * as dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 5000;
const ip = process.env.HOST || '0.0.0.0';

export default {
  port,
  ip,
};
