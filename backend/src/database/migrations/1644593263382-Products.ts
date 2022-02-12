import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class Products1644533263382 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "products",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "categoryId",
                        type: "int"
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "regular_price",
                        type: "varchar"
                    },
                    {
                        name: "actual_price",
                        type: "varchar"
                    },
                    {
                        name: "discount_percentage",
                        type: "int",
                        isNullable: true
                    },
                    {
                        name: "installments",
                        type: "varchar"
                    },
                    {
                        name: "image",
                        type: "varchar"
                    },
                    {
                        name: "size",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "size_pp",
                        type: "bool",
                        default: "false"
                    },
                    {
                        name: "size_p",
                        type: "bool",
                        default: "false"
                    },
                    {
                        name: "size_m",
                        type: "bool",
                        default: "false"
                    },
                    {
                        name: "size_g",
                        type: "bool",
                        default: "false"
                    },
                    {
                        name: "size_gg",
                        type: "bool",
                        default: "false"
                    }
                ]
            })
        )

        await queryRunner.createForeignKey("products", new TableForeignKey({
            columnNames: ["categoryId"],
            referencedColumnNames: ["id"],
            referencedTableName: "categorys",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products");
    }

}
