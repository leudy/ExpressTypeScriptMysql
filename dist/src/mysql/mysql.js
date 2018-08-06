"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class Mysql {
    constructor() {
        this.connected = false;
        console.log("Inicializando conectividad Mysql");
        this.cnn = mysql.createConnection({});
        this.conectDb();
    }
    conectDb() {
        this.cnn.connect((err) => {
            if (err) {
                console.log(err);
                return;
            }
            this.connected = true;
            console.log("DataBase Online!!");
        });
    }
}
exports.default = Mysql;
