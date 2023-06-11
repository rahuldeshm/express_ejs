const fs = require("fs");
const path = require("path");
const product = [];
module.exports = class Product {
  constructor(title) {
    this.title = title;
  }
  save() {
    // product.push(this);
    fs.appendFile("product.text", `${this.title} `, (err) => {
      if (err) {
        console.log(err);
      } else console.log("sussfullay added");
    });
  }
  static fetchAll() {
    // console.log(product);
    // return product;
    const data = fs.readFileSync(
      path.join(__dirname, "..", "product.text"),
      "utf8",
      (err) => {
        if (err) {
          console.log(err);
        } else console.log("fetching successful");
      }
    );
    const datas = data.split(" ");
    const ans = [];
    for (let i of datas) {
      ans.push({ title: i });
    }
    return ans;
  }
};
