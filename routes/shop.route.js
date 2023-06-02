// Importando el enrutador de express
import { Router } from 'express';
// Importando Action funcion del controlador products
import { getProducts } from '../controllers/products.controller.js'

// Creando una instancia del enrutador de express
const router = Router();

// GET /
router.get('/', getProducts);

// GET /about
router.get('/about', (req, res) => {
  console.log("📢 Sirviendo la ruta '/about'");
  // Se contesta al server
  res.send(`
    <h1>🪄 About...</h1>
    <p>App for Fullstack Web Dev Course I!</p>
  `);
});

export default router;