const express=require('express');
const cheerio=require('cheerio');
const axios=require('axios');

const app=express();
const url="https://webscraper.io/test-sites/e-commerce/allinone";
axios(url)
     .then(res=>{
         const html=res.data
         const data=cheerio.load(html);
         const article=[];
         data('.title', html).each(function(){
             const title =data(this).text()
             const url =data(this).attr('href')
             article.push(
                 {
                     title,
                     url
                 }
             )
         })
         console.log(article);
     })

app.listen(3000,()=> console.log("Server is running on port 3000"));