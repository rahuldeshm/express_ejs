const fs = require("fs");
const path = require("path");
const rootDir = require("./../util/path");

const p = path.join(rootDir, "data", "products.json");
const getProductfromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};
module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductfromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        !!err && console.log(err);
      });
    });
    // fs.readFile(p, (err, fileContent) => {
    //   let products = [];
    //   if (!err) {
    //     products = JSON.parse(fileContent);
    //   }
    //   products.push(this);
    //
    // });
    // fs.appendFile("product.text", `${this.title} `, (err) => {
    //   if (err) {
    //     console.log(err);
    //   } else console.log("sussfullay added");
    // });
  }
  static fetchAll(cb) {
    getProductfromFile(cb);
    // return product;
    // const data = fs.readFileSync(
    //   path.join(__dirname, "..", "product.text"),
    //   "utf8",
    //   (err) => {
    //     if (err) {
    //       console.log(err);
    //     } else console.log("fetching successful");
    //   }
    // );
    // const datas = data.split(" ");
    // const ans = [];
    // for (let i of datas) {
    //   ans.push({ title: i });
    // }
    // return [{ title: "rahul" }];
  }
};
