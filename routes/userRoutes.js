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
}
module.exports =userRoutes