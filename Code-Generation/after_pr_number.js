require("dotenv/config");

const branch = process.env.branch_name;
const pr_array = JSON.parse(process.env.after_pr_array);

for (item of pr_array) {
  if (item.head.ref == `${branch}`) {
    console.log(item.number);
    break;
  } else {
    console.log("false");
  }
}
