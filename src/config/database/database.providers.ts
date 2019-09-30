import * as Path from 'path'

import { Sequelize } from 'sequelize-typescript'

export const databaseProviders = [{
  provide: 'SEQUELIZE',
  useFactory: async () => {
    const pathModels = Path.join(__dirname, '../../api')
    const sequelize = new Sequelize({
      dialect: 'mysql',
      host: 'localhost',
      port: 3302,
      username: 'root',
      password: 'admin',
      database: 'dbstocks',
      models: [pathModels + '/**/*.model.js']
    })
    await sequelize.sync()
    return sequelize
  }
}]
