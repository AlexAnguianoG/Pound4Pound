let dbConfig = require("../Utilities/mysqlConfig");



let getUserPW = (criteria, callback) => {
    //criteria.aricle_id ? conditions += ` and aricle_id = '${criteria.aricle_id}'` : true;
    console.log(criteria);
    console.log("SELECT USERNAME, PASSWORD FROM `user` WHERE USERNAME =", criteria.Username);
    dbConfig.getDB().query("SELECT `Password`, `Email`, `role` FROM `user` WHERE `isActive` = '1' AND `Username` = '"+criteria.Username+"'", callback);
}

let getUserDetails = (criteria, callback) => {
    let conditions = "";
    criteria.ID ? conditions += ` and id = '${criteria.ID}'` : true;
    dbConfig.getDB().query("SELECT * FROM `user` " + conditions, callback);
}

module.exports = {
    getUserPW: getUserPW,
    getUserDetails: getUserDetails
}