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

module.exports = router