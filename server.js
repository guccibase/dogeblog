require('dotenv').config()
const express = require('express')
const ejs = require('ejs')
const app = express();
const articlesRouter = require('./routes/articles')
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const Articles = require('./models/articles')


app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}))



app.get('/', async (req, res)=>{
    const articles = await Articles.find();
    res.render('index', {articles:articles})
})
app.use('/articles', articlesRouter);


app.listen(3000)