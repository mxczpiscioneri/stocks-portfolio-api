
import * as Fs from 'fs'
import * as Path from 'path'
import * as Dotenv from 'dotenv'

const setup = () => {
  process.env.NODE_ENV = process.env.NODE_ENV || 'development';
  // const envPath = Path.join(__dirname, '../../../../.env')
  const envPath = process.env.NODE_ENV === 'test' ? Path.join(__dirname, '/../../../../test/.env') : Path.join(__dirname, `/../../../../.env.${process.env.NODE_ENV}`);

  try {
    Fs.statSync(envPath)
    Dotenv.config({path: envPath})
  } catch (error) {
    console.log(envPath + ' not found, load by environment variables')
  }
}

setup()

const all = {
  port: process.env.PORT || 9000,

  mysql: {
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: parseInt(process.env.MYSQL_PORT),
    host: process.env.MYSQL_HOST
  }
}

export default all
