require("dotenv/config");
const axios = require("axios");

axios
  .get("https://api.github.com/repos/aqueefcs/pr-test/pulls")
  .then((response) => {
    const pr_list = response.data;
    // const branch = "RITM0130572";
    const branch = process.env.BRANCH;
    for (item of pr_list) {
      if (item.head.ref == `${branch}`) {
        console.log(item.number);
        break;
      } else {
        console.log("false");
      }
    }
  })
  .catch((err) => {
    throw Error(`Error in Fetching pull request list: ${err}`);
  });
