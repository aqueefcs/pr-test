require("dotenv/config");

const branch = process.env.BRANCH;
const pr_array = JSON.parse(process.env.PR_ARRAY);

console.log("array list", pr_array);

for (item of pr_array) {
  if (item.head.ref == `${branch}`) {
    console.log(item.number);
  } else {
    console.log("false");
  }
}
