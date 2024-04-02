require("dotenv/config");

const pr_array = JSON.parse(process.env.PR_ARRAY);

if (pr_array.length == 0) {
  console.log(pr_array.length);
} else {
  console.log(true);
}
