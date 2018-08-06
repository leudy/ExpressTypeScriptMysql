"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
class Server {
    /**
     *
     */
    constructor(port) {
        this.port = port;
        this.app = express();
    }
    static init(puerto) {
        return new Server(puerto);
    }
    start(callback) {
        this.app.listen(this.port, callback);
        this.publicFolder();
    }
    publicFolder() {
        const publicPth = path.resolve(__dirname, "../../public");
        this.app.use(express.static(publicPth));
    }
}
exports.default = Server;
