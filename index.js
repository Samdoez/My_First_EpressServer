import express from "express";
const app = express();
const port = 3000;

app.listen(port, () =>{
  console.log("Server running already at port " + port);
  // i can also add the port by string intepolation like this below backticks and ${}
  // console.log(`Server running already at port ${port}`);
});
