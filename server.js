var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));
var articles={
  'article-one' : {
    title:'article-one',
    heading:'article One',
    date:'sep 5 2017',
    content:`
    <p>i am charan .this is my first webapp article one</p>`
   },
   
    'article-two' : {
    title:'article-two',
    heading:'article two2',
    date:'feb 15 2017',
    content:`
    <p>i am charan .this is my first webapp article two</p>
    <h4><p>i am charan .this is my first webapp article two</p></h4> `
    },
    
    'article-three' : {
    title:'article-three',
    heading:'article three',
    date:'sep 65 2017',
    content:`
    <h7><p>i am charan .this is my first webapp from article three</p></h7>`
   },
 };
function htmlfunction(data)
{
    var date=data.date;
    var title=data.title;
    var content=data.content;
    var heading=data.heading;
var htmltemplate=`<html>
    <body>
        <link href='/ui/style.css' rel="stylesheet" />
        <div>
<title>
${title}
</title>
<div class='container'>
    <a href="/">home</a>
    <hr/>
    <div>
        ${date}
        </div>
        <div>
        <h3>${heading}</h3>  
        </div>
        <div>
<h5><p> ${content}
</div>
</div>
</body>
</html>`;
return htmltemplate;
}
var count=0;
app.get('/counter',function(req,res){
    count=count+1;
    res.send(count.toString());
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/:articlename',function(req,res){
 var articleName=req.params.articlename;
 res.send(htmlfunction(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
