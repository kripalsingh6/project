const express = require('express')
const app = express();
const port = 8080;



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


// app.use((req,res)=>{
//     console.log("request recived");
//     let code= "<h1>Fruits</h1> <ul><li>Apple</li> <li>Orange</li></ul>";
//     res.send(code);
// });

app.get("/",(req,res)=>{
  res.send("helo now i change my road");
});
app.get("/apple",(req,res)=>{
  res.send("you contacted apple path");
});
app.get("/orange",(req,res)=>{
  res.send("you contacted orange path");
});
// app.get("*",(req,res)=>{
//   res.send("this path is not exist");
// });

app.post("/post",(req,res)=>{
    res.send("you send me the response");
});

app.get("/:Username/:Id",(req,res)=>{
   let {Username,Id}=req.params;
  // console.log(req.params);
  // res.send("welcome to jira world");
  let htmlstr=`<h1>welcome to jira world @ ${Username}</h1>`;
  res.send(htmlstr);

  
});

app.get("/Search",(req,res)=>{
  let{q}= req.query;
  let val= `<h1>welocome to the searching ${q}</h1>`;
  if(!q){
    res.send("<h1>Nothing searched</h1>");
  }
  res.send(val);
});