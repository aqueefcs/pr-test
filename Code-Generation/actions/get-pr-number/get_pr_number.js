require("dotenv/config");
const core = require("@actions/core");

const branch = process.env.branch_name;
const pr_array = JSON.parse(process.env.pr_array);

console.log(`Branch: ${branch}`);
// console.log(`PR array: ${pr_array}`);

for (item of pr_array) {
  if (item.head.ref === branch) {
    console.log(item.head.ref);
    core.setOutput("PR_NUMBER", item.number);
  } else {
    core.setOutput("PR_NUMBER", "false");
  }
}
