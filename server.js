var express = require('express');
var morgan = require('morgan');
var path = require('path');
var content;
var articleone={
    title:'article-one',
    heading:'article One',
    date:'sep 5 2017',
    content:`
    <p>i am charan .this is my first webapp</p>
<p>i am charan .this is my first webapp</p>
<p>i am charan .this is my first webapp</p>
<p>i am charan .this is my first webapp</p>
<p>i am charan .this is my first webapp</p>
<p>i am charan .this is my first webapp</p>
<p>i am charan .this is my first webapp</p>
<p>i am charan .this is my first webapp</p>
<p>i am charan .this is my first webapp</p> `
};
function htmlfunction(data)
{
    var date=data.date;
    var title=data.title;
    var content=data.content;
var htmltemplate=`<html>
    <body>
        <link href='/ui/style.css'/>
        <div>
<title>
$(title)
</title>
<div class='container'>
    <a href="/">home</a>
    <hr/>
    </div>
    <div>
        $(date)
        </div>
        <div>
       <h3>awesome</h3>  
        </div>
       
<h5><p>$(content)
</div>
</body>
</html>`;
return htmltemplate;

}
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/life1',function(req,res){
    res.send('this is my life opened');
});
app.get('/article-one',function(req,res){
 res.send(htmlfunction(articleone));
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
