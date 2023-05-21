// Importando Express
import express from 'express';

// Importando el enrutador
import adminRouter from './routes/admin.route.js';
import shopRouter from './routes/shop.route.js';

// Creando la instancia de express
// que basicamente es un middleware
const app = express();

// Se registra el middleware del body-parser
app.use(express.urlencoded({ extended: true }));

// Se agrega ruta de administrador
app.use(adminRouter);
// Se agrega ruta shop
app.use(shopRouter);


// Definiendo puertos
const port = 3000;
const ip = "0.0.0.0"

// Arrancando el servidor
app.listen(port, ip, () => {
    console.log("📢 Sirviendo en http://localhost:3000");
    console.log(`📢 Sirviendo en http://${process.env.IP}:${process.env.PORT}`);
});