import mysql = require("mysql");
import color = require("color");

export default class Mysql {
  private static _instance: Mysql;
  cnn: mysql.Connection;
  connected: boolean = false;

  constructor() {
    console.log("Inicializando conectividad Mysql");
    this.cnn = mysql.createConnection({});
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
}
