
// Datos en memoria volatil
export const products = [];


// GET /admin/add-product
export const getAddProduct = (req, res, next) => {
  // Servimos el formulario
  console.log("📢 Sirviendo formulario...");
  return res.render('add-product', {
    addProduct: `active`,
    viewStyle: '/css/add-product.css',
    docTitle: "Add Product"
  });
};

// POST /admin/add-product
export const postAddProduct = (req, res) => {
  // Realizaremos la desestructuracion de
  // "name" de la petición
  const { title } = req.body;
  // Agregamos el dato en la base de datos
  products.push(title);
  // Redireccionando
  return res.redirect('/');
}

// GET /
export const getProducts = (req, res)=>{
  // Mostrando productos en memoria
  console.log("📢 Sirviendo la ruta '/'");
  res.render('shop', { 
    shop: 'active', 
    docTitle:"Shop",
    viewStyle: '/css/product.css',
    isProductsListEmpty: products.length === 0,
    products
  });
}