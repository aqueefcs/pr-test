require("dotenv/config");
const core = require("@actions/core");

const branch = process.env.BRANCH;
const pr_array = JSON.parse(process.env.PR_ARRAY);

for (item of pr_array) {
  if (item.head.ref == `${branch}`) {
    console.log(item.head.ref);
  } else {
    console.log(false);
  }
}
