const PaymentCtrl = require('../controllers/paymentController')
const { expressjwt: JWT } = require("express-jwt");

const paymentRoutes = (app) => {
    app.post('/checkout', async (req, res) => {
console.log(req,'aaaaaaaaaaaaaaaa')
        let response = await PaymentCtrl.checkoutPayment(req.body);
        return res.json({...response})
        
    })
    app.post('/paymentVerification/:id', async (req, res) => {
      console.log(req,'zzzzzzzzzzzzzzzzzzzzzzzzzzz')
        req.body._id=req.params.id
        let response = await PaymentCtrl.paymentVerification(req.body)
       
        if (!response.error) {
            res.redirect(`http://localhost:3000/thankYou`)
      }
       
    })
    app.get('/getKey', async (req, res) => {
        return res.json({
            key: process.env.RAZORPAY_API_KEY 
        })
    })
    
}
module.exports =paymentRoutes;