import { Table, Model, Column } from "sequelize-typescript";

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
}
