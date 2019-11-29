let dbConfig = require("../Utilities/mysqlConfig");



let getCase = (criteria, callback) => {
    //criteria.aricle_id ? conditions += ` and aricle_id = '${criteria.aricle_id}'` : true;
    dbConfig.getDB().query("SELECT * FROM `case`", criteria, callback);
}
let getFitnessCase = (criteria, callback) => {
    //criteria.aricle_id ? conditions += ` and aricle_id = '${criteria.aricle_id}'` : true;
    dbConfig.getDB().query("SELECT * FROM `case` WHERE type='Fitness'", criteria, callback);
}
let getDietCase = (criteria, callback) => {
    //criteria.aricle_id ? conditions += ` and aricle_id = '${criteria.aricle_id}'` : true;
    dbConfig.getDB().query("SELECT * FROM `case` WHERE type='Diet'", criteria, callback);
}

let getCaseDetail = (criteria, callback) => {
    let conditions = "";
    criteria.ID ? conditions += ` and id = '${criteria.ID}'` : true;
    dbConfig.getDB().query("SELECT * FROM `case` WHERE id = "+criteria.id+"" , callback);
}

let createCase = (dataToSet, callback) => {
    dbConfig.getDB().query("INSERT INTO `case` (`type`, `isApproved`) VALUES ('"+dataToSet.type+"', '0');", callback);
    //console.log("INSERT INTO `case` (`id`, `type`, `case`, `googlefile`) VALUES ("+dataToSet.ID+","+dataToSet.type+","+dataToSet.Case+", "+dataToSet.GoogleFile+");");
}

let deleteCase = (criteria, callback) => {
    let conditions = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    console.log("delete from `case` where " + conditions);
    dbConfig.getDB().query("delete from `case` where " + conditions, callback);
    //dbConfig.getDB().query("DELETE FROM `case` (`id`, `type`, `case`, `googlefile`) VALUES ('"+dataToSet.ID+"','"+dataToSet.type+"','"+dataToSet.Case+"', '"+dataToSet.GoogleFile+"');", callback);

}

let updateCase = (criteria, dataToSet, callback) => {
    let conditions = "";
    let setData = "";
    let id = criteria.id;
    criteria.id ? conditions += ` and ID = '${criteria.id}'` : true;
    dataToSet.type ? setData += `type = '${dataToSet.type}'` : true;
    dataToSet.Case ? setData += `, title = '${dataToSet.title}'` : true;
    dataToSet.isApproved ? setData += `, isApproved = '${dataToSet.isApproved}'` : true;
    //console.log(`UPDATE case SET type= ${dataToSet.type},titl= ${dataToSet.titl}, googlefile=${dataToSet.GoogleFile}  WHERE id = ${id} `);
    dbConfig.getDB().query("UPDATE `case` SET `type`= '"+dataToSet.type+"', `title`= '"+dataToSet.title+"' WHERE id = "+id+"" , callback);
}
let approveCase = (criteria, callback) => {
    let conditions = "";
    //let setData = "";
    let id = criteria.id;
    criteria.id ? conditions += ` and ID = '${criteria.id}'` : true;
    console.log(id);
    //dataToSet.type ? setData += `type = '${dataToSet.type}'` : true;
    //dataToSet.Case ? setData += `, title = '${dataToSet.title}'` : true;
    //dataToSet.isApproved ? setData += `, isApproved = '${dataToSet.isApproved}'` : true;
    console.log(`UPDATE case SET WHERE id = ${id} `);
    dbConfig.getDB().query("UPDATE `case` SET `isApproved`= '1' WHERE id = "+id+"" , callback);
}
module.exports = {
    getCase: getCase,
    createcCse: createCase,
    deleteCase: deleteCase,
    updateCase: updateCase,
    getCaseDetail: getCaseDetail,
    approveCase: approveCase,
    getFitnessCase: getFitnessCase,
    getDietCase: getDietCase
}