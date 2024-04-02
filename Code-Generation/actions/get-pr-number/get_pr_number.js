require("dotenv/config");
const core = require("@actions/core");

const branch = process.env.BRANCH;
const pr_array = JSON.parse(process.env.PR_ARRAY);

console.log(`Branch: ${branch}`);
// console.log(`PR array: ${pr_array}`);

for (item of pr_array) {
  console.log(item.head.ref);
  if (item.head.ref == `${branch}`) {
    console.log(item.head.ref);
  } else {
    console.log("Pr Not Present");
  }
}
