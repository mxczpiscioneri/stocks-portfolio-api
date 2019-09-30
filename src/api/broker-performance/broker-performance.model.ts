import { Table, Column, DataType, Model } from "sequelize-typescript";

@Table({
  tableName: 'broker_performance',
  underscored: true,
  freezeTableName: true,
  timestamps: false
})
export default class BrokerPerformance extends Model<BrokerPerformance> {
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
}