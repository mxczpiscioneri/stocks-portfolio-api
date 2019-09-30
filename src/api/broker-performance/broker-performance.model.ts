import { Table, Column, DataType, Model, ForeignKey, BelongsTo } from "sequelize-typescript";

import Broker from "../broker/broker.model";

@Table({
  tableName: 'broker_performance',
  underscored: true,
  freezeTableName: true,
  timestamps: false
})
export default class BrokerPerformance extends Model<BrokerPerformance> {
  @ForeignKey(() => Broker)
  @Column(DataType.INTEGER)
  idBroker: number

  @Column(DataType.DATEONLY)
  mounth: Date

  @Column(DataType.DOUBLE)
  value: number

  @Column(DataType.DOUBLE)
  annual: number

  @Column(DataType.DATE)
  createdAt: Date

  @BelongsTo(() => Broker)
  broker: Broker
}