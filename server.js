const express = require('express')
const ejs = require('ejs')
const app = express();
const articlesRouter = require('./routes/articles')

app.use('/articles', articlesRouter);
app.set('view engine', 'ejs')





app.get('/', (req, res)=>{
    const articles =[{
        title:"Doge to the moon",
        description: "Doge is the future of currencies" ,
        date: new Date().toLocaleDateString()  
                    },
        {
            title: "Elon tweets about doge",
            description: "Doge is the future of currencies",
                    date: new Date().toLocaleDateString()

        },
        {
            title: "Doge will literaly land on the moon",
            description: "Doge is the future of currencies", 
            date: new Date().toLocaleDateString()

        },
        {
            title: "Doge is falling",
            description: "Doge is the future of currencies",
            date: new Date().toLocaleDateString()

        }];
    res.render('index', {articles:articles})
})


app.listen(3000)