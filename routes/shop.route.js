// Importando el enrutador de express
import { Router } from 'express';
// Importando el arreglo de productos
import { products } from './admin.route.js';

// Creando una instancia del enrutador de express
const router = Router();

// GET /
router.get('/', (req, res)=>{
  // Mostrando productos en memoria
  console.log(products);
  console.log("📢 Sirviendo la ruta '/'");
  console.log(`length: ${ products.length === 0 }`);
  res.render('shop', { 
    shop: 'active', 
    docTitle:"Shop",
    viewStyle: '/css/product.css',
    isProductsListEmpty: products.length === 0,
    products
  });
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