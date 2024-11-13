import { Server } from "http";
import app from "./app";

const port = process.env.PORT || 3000;
console.log(port);

async function main() {
  const server: Server = app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

main();
