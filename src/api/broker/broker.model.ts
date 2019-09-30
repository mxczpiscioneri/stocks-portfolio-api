import { Table, Model, Column, HasMany } from "sequelize-typescript";

import BrokerPerformance from "../broker-performance/broker-performance.model";

@Table({
  tableName: 'broker',
  underscored: true,
  freezeTableName: true,
  timestamps: false
})
export default class Broker extends Model<Broker> {
  @Column
  name: string

  @Column
  createdAt: Date

  @HasMany(() => BrokerPerformance)
  brokerPerformances: BrokerPerformance[]
}
