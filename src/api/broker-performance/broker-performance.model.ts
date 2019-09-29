import { Table, Column, DataType } from "sequelize-typescript";
import { Model } from "sequelize/types";

@Table({})
export default class BrokerPerformance extends Model<BrokerPerformance> {
  @Column(DataType.DATEONLY)
  mounth: Date

  @Column(DataType.DOUBLE)
  value: number

  @Column(DataType.DOUBLE)
  annual: number

  @Column(DataType.DATE)
  createdAt: Date
}