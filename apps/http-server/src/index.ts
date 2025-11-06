import express from "express";

const app = express();
app.get("/", () => {
  console.log("Hellllo");
});
app.listen("3333");
