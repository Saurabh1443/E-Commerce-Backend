
const ProductCtrl = require('../controllers/product')
const { expressjwt: JWT } = require("express-jwt");


const productRoutes= (app) => {
    app.get('/products',async (req, res) => {
      let response = await ProductCtrl.getAllProducts()
      
        return res.json({...response})
    })
    app.get('/product/:id', async (req, res) => {
        let _id=req.params.id
      const response = await ProductCtrl.getProductById(_id);
      
      return res.json({...response})
    })
     
};
module.exports = productRoutes;

