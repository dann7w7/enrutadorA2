// Importando el enrutador de express
import { Router } from 'express';
// Importando el gestor de rutas
import path from 'path';

// Creando una instancia del enrutador de express
const router = Router();

// Importando productos
import { products } from './admin.route.js';

// GET /
router.get('/', (req, res)=>{
  // Mostrando productos en memoria
  console.log(products);
  console.log("📢 Sirviendo la ruta '/'");
  res.render('shop');
});

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