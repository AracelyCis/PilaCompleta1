import express from "express";
import { join } from "path";

const router = express.Router();
const __dirname = import.meta.url;

// Ruta para la aplicación Vue
router.get("/vue", (req, res) => {
  res.sendFile(join(__dirname, "views/vue/main.vue"));
});

export default router;
