import { Router, Request, Response } from "express";

const router = Router();

router.get("/heroes", (req: Request, res: Response) => {
  res.json({ ok: true, msj: "todo esta requete fine" });
});
router.get("/heroes/:id", (req: Request, res: Response) => {
  var id = req.params.id;
  res.json({ ok: true, msj: "todo esta requete fine", id: id });
});

export default router;
