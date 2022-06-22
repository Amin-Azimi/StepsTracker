import App from "./app";
import "dotenv/config";

(async () => {
  const app = new App();
  app.listen();
})();
