import { Router } from "express";
import { getRecetas, deleteReceta,postReceta,putReceta,getRecetaById } from "../controllers/recetas.controllers.js";

const router = Router();

router.route('/recetas').get(getRecetas).post(postReceta);
router.route('/recetas/:id').delete(deleteReceta).put(putReceta).get(getRecetaById);

export default router;