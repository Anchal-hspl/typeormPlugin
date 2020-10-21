"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserAddressTable1603084638629 = void 0;
class createUserAddressTable1603084638629 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`create table topic(
                blog_id INT NOT NULL AUTO_INCREMENT,
                blog_title VARCHAR(100) NOT NULL,
                blog_author VARCHAR(40) NOT NULL,
                submission_date DATE,
                PRIMARY KEY ( blog_id )
             );`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.createUserAddressTable1603084638629 = createUserAddressTable1603084638629;
//# sourceMappingURL=1603084638629-create_user_blog_table.js.map