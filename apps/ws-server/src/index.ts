import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (s) => {
  s.on("message", (d) => {
    s.send("hello from server");
  });
});
