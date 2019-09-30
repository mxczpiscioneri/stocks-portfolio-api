import * as Path from 'path'

import { Sequelize } from 'sequelize-typescript'

import Config from '../environment'

export const databaseProviders = [{
  provide: 'SEQUELIZE',
  useFactory: async () => {
    try {
      const pathModels = Path.join(__dirname, '../../api')
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: Config.mysql.host,
        port: Config.mysql.port,
        username: Config.mysql.user,
        password: Config.mysql.password,
        database: Config.mysql.database,
        models: [pathModels + '/**/*.model.js']
      })
      await sequelize.sync()
      return sequelize
    } catch (error) {
      console.log(`Error loading database ${Config.mysql.database} - Error : ${error}`)
    }
  }
}]
