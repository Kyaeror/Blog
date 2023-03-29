const router = require('express').Router()
const {User, Post} = require(`../../models`)

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
router.post(`/` , (req , res) => {
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    .then((data)=> res.json(data))
})
module.exports = router