const router = require(`express`).Router()
const session = require(`express-session`)
const {Post, User} = require(`../models`)
const auth = require(`../utils/auth`)

router.get(`/`, async (req, res) => {
    try {
        const posts = await Post.findAll({ include: User})

        res.render(`homepage`, {
            posts: posts.map(post => ({
                id: post.id,
                name: post.post_name,
                message: post.message,
                date: post.time,
                username: post.user.name
            }))
        })
    }catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
})
router.get(`/login`, (req, res) => {
    res.render(`login`)
})
router.get(`/register`, (req, res) => {
    res.render(`register`)
})
router.get(`/createBlog`, (req, res) => {
    res.render(`createBlog`)
})
router.get(`/dashboard`, (req, res) => {
    res.render(`dashboard`)
})

router.post(`/createBlog`, async (req, res)=> {
    // try {
    //     await Post.create({
    //       message: req.body.message,
    //       creator: req.session.user.name
    //     })
    
    //     res.redirect('/createBlog')
    //   } catch (err) {
    //     console.error(err)
    //     res.status(500).json(err)
    //   }
})

module.exports = router