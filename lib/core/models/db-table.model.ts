import { DbColumn } from './db-column.model';
import { TableConfig } from './table-config.model';

export class DbTable extends TableConfig {
    public columnList: [DbColumn];
}