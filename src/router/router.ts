import { Router, Request, Response } from "express";
import Mysql from "../mysql/mysql";

const router = Router();

router.get("/heroes", (req: Request, res: Response) => {
  const query = "SELECT * FROM heroe";

  Mysql.executeQuery(query, (error: any, heroes: Object[]) => {
    if (error) {
      return res.status(400).json({ ok: false, error: error });
    } else {
      return res.status(200).json({
        ok: true,
        heroes
      });
    }
  });

  //res.json({ ok: true, msj: "todo esta requete fine" });
});
router.get("/heroes/:id", (req: Request, res: Response) => {
  var id = req.params.id;
  const filterid = Mysql.instance.cnn.escape(id);
  const query = `SELECT * FROM heroes where id = ${filterid}`;
  Mysql.executeQuery(query, (error: any, heroes: Object[]) => {
    if (error) {
      return res.status(400).json({ ok: false, error: error });
    } else {
      return res.status(200).json({
        ok: true,
        heroe: heroes[0]
      });
    }
  });
  // res.json({ ok: true, msj: "todo esta requete fine", id: id });
});

export default router;
