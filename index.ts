import Server from "./src/server/server";
import router from "./src/router/router";
import Mysql from "./src/mysql/mysql";

const server = Server.init(3000);
server.app.use(router);

const mysql = new Mysql();

server.start(() => {
  console.log("Servidor runnin on port 3000");
});
