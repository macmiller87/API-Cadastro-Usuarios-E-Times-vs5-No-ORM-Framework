import "dotenv/config"; 
import { app } from "./index.js";

const port = process.env.SERVER_PORT ?? process.env.PORT;

app.listen(port, () => { console.log(`Server is running at port ${ port } 🔥🚀`) });