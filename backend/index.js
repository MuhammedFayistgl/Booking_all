const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();


app.use(cors());
app.use(express.static('views'))
let PORT = 8000;

const tocken = (req,res,next) => {
console.log('tocken');
}

app.get("/",tocken ,(req, res) => {
    console.log('tocken');
 
});
// app.get("*", (req, res) => {
//     res.status(404).send("<h1> 404 </h1>");
// });

app.get("/api", (req, res) => {
    res.sendFile(path.join(__dirname,'views/json','data.json'));
})
app.listen(PORT, () => `server running ${PORT}`);
// console.log(path.join(__dirname,'views',"index.html"));
