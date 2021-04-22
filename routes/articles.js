const express = require('express')
const Article = require('../models/articles')
const router = express.Router()





router.post('/', async (req, res)=>{
    const article = new Article({
        title:req.body.title,
        description:req.body.description,
        markdown: req.body.markdown
    })
    try {
        // res.error()
        const newArticle = await article.save();
        res.redirect(`/articles/${article.id}`)
    } catch (error) {
        res.render('new', {article:article} )

    }



})

router.get('/', (req, res)=>{
    res.render('index')
})

router.get('/new', (req, res) => {
    res.render('new',{article:new Article})
})


router.get('/:id', async (req, res) => {
    const article = await Article.findById(req.params.id)

    res.render('show_article',{article:article})
})


module.exports = router