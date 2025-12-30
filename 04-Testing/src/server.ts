import "dotenv/config";
import { styleText } from "node:util";
import { app } from "./app";

const port = process.env["PORT"]!;

app.listen(port, () => {
  console.log(styleText("green", `> Server is running on port: ${port}!`));
});
