"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get("/heroes", (req, res) => {
    res.json({ ok: true, msj: "todo esta requete fine" });
});
router.get("/heroes/:id", (req, res) => {
    var id = req.params.id;
    res.json({ ok: true, msj: "todo esta requete fine", id: id });
});
exports.default = router;
