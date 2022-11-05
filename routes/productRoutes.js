
const ProductCtrl =require('../controllers/product')
const productRoutes= (app) => {

    app.get('/products',async (req, res) => {
      let response = await ProductCtrl.getAllProducts()
      console.log(response);
        return res.json({...response})
    })
    app.get('/product/:id', async (req, res) => {
        let _id=req.params.id
      const response = await ProductCtrl.getProductById(_id);
      console.log({...response})
      return res.json({...response})
    })
     
    
    
  
};
  module.exports=productRoutes

