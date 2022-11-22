import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';

const myEnv = dotenv.config();
dotenvExpand.expand(myEnv);

const port = process.env.PORT || 5000;
const host = process.env.HOST || '0.0.0.0';
const mainDbConn = {
  provider: process.env.DB_CONNECTION,
  url: `${process.env.DB_CONNECTION}://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
};
const secondDbConn = {
  provider: process.env.DB2_CONNECTION,
  url: `${process.env.DB2_CONNECTION}://${process.env.DB2_HOST}:${process.env.DB2_PORT};database=${process.env.DB2_DATABASE};user=${process.env.DB2_USERNAME};password=${process.env.DB2_PASSWORD};encrypt=true;trustServerCertificate=true`,
};

export default {
  port,
  host,
  mainDbConn,
  secondDbConn,
};
