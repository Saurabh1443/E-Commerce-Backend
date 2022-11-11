const { expressjwt: JWT } = require("express-jwt");
const userCtrl = require('../controllers/userControllers');

const userRoutes = (app) => {
    app.post('/login', async (req, res) => {
        const {body} = req
        let response = await userCtrl.login(body);
        return res.json(response);
    })
    app.post('/register', async (req, res) => {
        const { body } = req;
        let response = await userCtrl.add(body)
        return res.json(response)
    })
    app.get('/profile/:id', JWT({ secret: 'secret', algorithms: ["HS256"], }), async(req, res) => {
        let { id } = req.params;
        let response = await userCtrl.profileById(id);
       return res.json(response)
    })
    app.put('/profile/update', async (req, res) => {
        let response = await userCtrl.updateProfile(req.body);
        return res.json({...response})
    })
}
module.exports =userRoutes