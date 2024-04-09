require("dotenv/config");
const axios = require("axios");

axios
  .get("https://api.github.com/repos/aqueefcs/pr-test/pulls")
  .then((response) => {
    const pr_list = response.data;
    if (pr_list.length == 0) {
      console.log(`${pr_list.length}`);
    } else {
      console.log("true");
    }
  })
  .catch((err) => {
    throw Error(`Error in Fetching pull request list: ${err}`);
  });
