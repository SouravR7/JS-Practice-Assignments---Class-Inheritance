// import using require
let obj = require("./shape");

// declare class
class Circle extends obj {
  calculateArea() {}
}

// export class using module.exports
module.exports = Circle;
