import { http } from "./http";
import "./websocket/client";

http.listen(3333,() => console.log("Server is running on 3333 port"));