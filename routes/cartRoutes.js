const CartCtrl = require('../controllers/cartController')
const { expressjwt: JWT } = require("express-jwt");


const cartRoutes= (app) => {
    app.put('/addToCart',  async (req, res) => {
     
      let response = await CartCtrl.addCartItems(req.body)
  
      return res.json({ ...response })
    });
    app.get('/getCartItems',  async (req, res) => {
        let { query:{User} } = req;
        
        let response = await CartCtrl.getCartItems(User)
        console.log(response,'iiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
        return res.json({...response});
    })
    // app.get('/orders/specific', JWT({ secret: 'secret', algorithms: ["HS256"], }), async (req, res) => {
    //   let { query :{id1,id2}} = req;
    //   let response = await OrderCtrl.getSpecificOrders({id1,id2})
    //   return res.json({ ...response })
    // })
  app.put('/updateQty', async (req, res) => {
    let response = await CartCtrl.updateQuantity(req.body);
    return res.json({ ...response });
   
  })
  app.put('/removeFromCart', async (req, res) => {
    let response = await CartCtrl.removeFromCart(req.body);
    return res.json({ ...response });
  }) 
   
       
  };
  module.exports =cartRoutes;