import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT || 3000,
  dbUri: process.env.DB_URI || 'mongodb://localhost:27017/myapp',
  NODE_ENV: process.env.NODE_ENV || 'development',
}