app.get(`/`, (req, res) => {
    res.render(`homepage`)
})
app.get(`/login`, (req, res) => {
    res.render(`login`)
})
app.get(`/register`, (req, res) => {
    res.render(`register`)
})
app.get(`/createBlog`, (req, res) => {
    res.render(`createBlog`)
})
app.get(`/dashboard`, (req, res) => {
    res.render(`dashboard`)
})