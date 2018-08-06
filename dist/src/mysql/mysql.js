"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class Mysql {
    constructor() {
        this.connected = false;
        console.log("Inicializando conectividad Mysql");
        this.cnn = mysql.createConnection({
            host: "localhost",
            user: "node_user",
            password: "a123456",
            database: "heroesdb"
        });
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
    static executeQuery(query, callback) {
        this.instance.cnn.query(query, (err, results, fields) => {
            if (err) {
                console.log("error en el query");
                return callback(err);
            }
            if (results.length === 0) {
                callback("Registro solicitado no existe");
            }
            callback(null, results);
        });
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
}
exports.default = Mysql;
