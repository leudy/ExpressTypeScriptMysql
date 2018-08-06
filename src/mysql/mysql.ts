import mysql = require("mysql");
import color = require("color");

export default class Mysql {
  private static _instance: Mysql;
  cnn: mysql.Connection;
  connected: boolean = false;

  constructor() {
    console.log("Inicializando conectividad Mysql");
    this.cnn = mysql.createConnection({
      host: "localhost",
      user: "node_user",
      password: "a123456",
      database: "heroesdb"
    });
    this.conectDb();
  }
  private conectDb() {
    this.cnn.connect((err: mysql.MysqlError) => {
      if (err) {
        console.log(err);
        return;
      }
      this.connected = true;
      console.log("DataBase Online!!");
    });
  }

  static executeQuery(query: string, callback: Function) {
    this.instance.cnn.query(query, (err, results: Object[], fields) => {
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

  public static get instance() {
    return this._instance || (this._instance = new this());
  }
}
