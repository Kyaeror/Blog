const router = require('express').Router()
const {User, Post} = require(`../../models`)

router.get(`/`, (req , res) => {
    Post.findAll({
        include: [
            {
                model: User,
                attributes: [`name`]
            }
        ]
    })
    .then((data)=> res.json(data))
})
router.get(`/:id`, (req , res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: [`name`]
            }
        ]
    })
    .then((data)=> res.json(data))
})
module.exports = router