import "dotenv/config";
import { app } from "./app.js";

const port = process.env.PORT || 4000;

app.listen(port, () => void console.log(`Server open on port: ${port}`));
