import {MigrationInterface, QueryRunner} from "typeorm";

export class createUserAddressTable1603084638629 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `create table topic(
                blog_id INT NOT NULL AUTO_INCREMENT,
                blog_title VARCHAR(100) NOT NULL,
                blog_author VARCHAR(40) NOT NULL,
                submission_date DATE,
                PRIMARY KEY ( blog_id )
             );`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
