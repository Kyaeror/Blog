const router = require('express').Router()
const {User, Post} = require(`../../models`)
const connection = require(`../../config/connection`)

router.get(`/`, (req, res) => {
    User.findAll({
        include: [
            {
                model: Post,
                attributes: [`post_name`]
            }
        ]
    })
    .then((data)=> res.json(data))
})
router.get(`/:id`, (req, res)=>{
    User.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post,
                attributes: [`post_name`]
            }
        ]
    })
    .then((data) => res.json(data))
})
router.post('/login', async (req, res) => {
    const {email, password} = req.body
    connection.query(`SELECT * FROM blog_db.user WHERE email='${email}' AND password='${password}'`, 
    (err, result)=> {
        if (err){
            res.status(500).send(`Internal server error`)
        }else if (result.length === 0){
            res.render('login', { error: 'Incorrect email or password' })
        }else {
            res.render('/')
        }
    })
})

module.exports = router