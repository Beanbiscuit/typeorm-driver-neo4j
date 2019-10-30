import {ColumnType, Driver, EntityMetadata, ObjectLiteral, QueryRunner, TableColumn} from "typeorm";
import {DataTypeDefaults} from "typeorm/driver/types/DataTypeDefaults";
import {ColumnMetadata} from "typeorm/metadata/ColumnMetadata";
import {SchemaBuilder} from "typeorm/schema-builder/SchemaBuilder";
import {MappedColumnTypes} from "typeorm/driver/types/MappedColumnTypes";
import {BaseConnectionOptions} from "typeorm/connection/BaseConnectionOptions";

/**
 * Driver class for Neo4j graph database.
 */
export class Neo4jDriver implements Driver {
    dataTypeDefaults: DataTypeDefaults;
    isReplicated: boolean;
    mappedDataTypes: MappedColumnTypes;
    options: BaseConnectionOptions;
    spatialTypes: ColumnType[];
    supportedDataTypes: ColumnType[];
    treeSupport: boolean;
    withLengthColumnTypes: ColumnType[];
    withPrecisionColumnTypes: ColumnType[];
    withScaleColumnTypes: ColumnType[];

    afterConnect(): Promise<void> {
        return undefined;
    }

    buildTableName(tableName: string, schema?: string, database?: string): string {
        console.log(tableName);
        console.log(schema);
        console.log(database);
        return "";
    }

    connect(): Promise<void> {
        return undefined;
    }

    createFullType(column: TableColumn): string {
        console.log(column);
        return "";
    }

    createGeneratedMap(metadata: EntityMetadata, insertResult: any): ObjectLiteral | undefined {
        console.log(metadata);
        console.log(insertResult);
        return undefined;
    }

    createParameter(parameterName: string, index: number): string {
        console.log(parameterName);
        console.log(index);
        return "";
    }

    createQueryRunner(mode: "master" | "slave"): QueryRunner {
        console.log(mode);
        return undefined;
    }

    createSchemaBuilder(): SchemaBuilder {
        return undefined;
    }

    disconnect(): Promise<void> {
        return undefined;
    }

    escape(name: string): string {
        console.log(name);
        return "";
    }

    escapeQueryWithParameters(sql: string, parameters: ObjectLiteral, nativeParameters: ObjectLiteral): [string, any[]] {
        console.log(sql);
        console.log(parameters);
        console.log(nativeParameters);
        return ["", []];
    }

    findChangedColumns(tableColumns: TableColumn[], columnMetadatas: ColumnMetadata[]): ColumnMetadata[] {
        console.log(tableColumns);
        console.log(columnMetadatas);
        return [];
    }

    getColumnLength(column: ColumnMetadata): string {
        console.log(column);
        return "";
    }

    isReturningSqlSupported(): boolean {
        return false;
    }

    isUUIDGenerationSupported(): boolean {
        return false;
    }

    normalizeDefault(columnMetadata: ColumnMetadata): string {
        console.log(columnMetadata);
        return "";
    }

    normalizeIsUnique(column: ColumnMetadata): boolean {
        console.log(column);
        return false;
    }

    normalizeType(column: { type?: ColumnType | string; length?: number | string; precision?: number | null; scale?: number; isArray?: boolean }): string {
        console.log(column);
        return "";
    }

    obtainMasterConnection(): Promise<any> {
        return undefined;
    }

    obtainSlaveConnection(): Promise<any> {
        return undefined;
    }

    prepareHydratedValue(value: any, column: ColumnMetadata): any {
        console.log(value);
        console.log(column);
    }

    preparePersistentValue(value: any, column: ColumnMetadata): any {
        console.log(value);
        console.log(column);
    }
}