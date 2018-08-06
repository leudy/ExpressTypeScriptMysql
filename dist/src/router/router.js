"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const router = express_1.Router();
router.get("/heroes", (req, res) => {
    const query = "SELECT * FROM heroe";
    mysql_1.default.executeQuery(query, (error, heroes) => {
        if (error) {
            return res.status(400).json({ ok: false, error: error });
        }
        else {
            return res.status(200).json({
                ok: true,
                heroes
            });
        }
    });
    //res.json({ ok: true, msj: "todo esta requete fine" });
});
router.get("/heroes/:id", (req, res) => {
    var id = req.params.id;
    const filterid = mysql_1.default.instance.cnn.escape(id);
    const query = `SELECT * FROM heroes where id = ${filterid}`;
    mysql_1.default.executeQuery(query, (error, heroes) => {
        if (error) {
            return res.status(400).json({ ok: false, error: error });
        }
        else {
            return res.status(200).json({
                ok: true,
                heroe: heroes[0]
            });
        }
    });
    // res.json({ ok: true, msj: "todo esta requete fine", id: id });
});
exports.default = router;
