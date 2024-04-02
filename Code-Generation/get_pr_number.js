require("dotenv/config");

const branch_name = process.env.branch_name;
const pr_array = process.env.pr_array;

console.log(`Branch: ${branch_name}`);
console.log(`PR array: ${pr_array}`);
