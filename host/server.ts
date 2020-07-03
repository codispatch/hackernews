import App from "./app";
import * as config from "./config/config";

const port = config.PORT;

App.listen(port, err => {
    if (err) {
      return console.log(err);
    }
    return console.log(`server is listening on ${port}`);
  });