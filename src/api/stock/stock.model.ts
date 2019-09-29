import { Table, Model, Column } from "sequelize-typescript";

@Table({
  tableName: 'stock',
  underscored: true,
  freezeTableName: true,
  timestamps: false
})
export default class Stock extends Model<Stock> {
  @Column
  name: string

  @Column
  code: string

  @Column
  createdAt: Date
}
