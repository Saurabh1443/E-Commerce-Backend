const OrderCtrl = require('../controllers/orderController')
const { expressjwt: JWT } = require("express-jwt");

const orderRoutes= (app) => {
  app.post('/placeOrder', JWT({ secret: 'secret', algorithms: ["HS256"], }), async (req, res) => {
    console.log(req,'uuuuuuuuu')
    req.body.User = req.auth._id;
    let response = await OrderCtrl.addOrderItems(req.body)

    return res.json({ ...response });
  });
  app.get('/orders', JWT({ secret: 'secret', algorithms: ["HS256"], }), async (req, res) => {
    let { query} = req;
    let response = await OrderCtrl.getOrders(query)
    return res.json({ ...response })
  })
  app.get('/orders/specific', JWT({ secret: 'secret', algorithms: ["HS256"], }), async (req, res) => {

    let { query: { id1, id2 } } = req;
    console.log(id1," ",id2,'dddddddddddddddddddddddddddd')
    let response = await OrderCtrl.getSpecificOrders({id1,id2})
    return res.json({ ...response })
  })

  
 
     
};
module.exports =orderRoutes;
