require("dotenv/config");

const branch_name = process.env.branch_name;
const pr_array = JSON.parse(process.env.pr_array);

console.log(`Branch: ${branch_name}`);
// console.log(`PR array: ${pr_array}`);

for (item of pr_array) {
  console.log(item.head.ref);
}
