const db = require("../config/db");

const Driver = function (driver) {
    this.name = driver.name;
    
  };

Driver.getAll = (result) => {
    let query = "SELECT * FROM driver";
  
    db.query(query, (err, res) => {
      if (err) {
        console.log("error:", err);
        result(null, err);
        return;
      }
      // console.log("driver:", res);
      result(null, res);
    });
  };



module.exports = Driver;