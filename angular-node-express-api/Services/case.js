let async = require('async'),
    parseString = require('xml2js').parseString;

let util = require('../Utilities/util'),
    caseDAO = require('../DAO/caseDAO');
//config = require("../Utilities/config").config;


/**API to create the atricle */
let createCase = (data, callback) => {
    async.auto({
        case: (cb) => {
                var dataToSet = {
                    "ID": data.ID,
                    "title": data.title,
                    "type": data.type? data.type : '',

                }
                caseDAO.createCase(dataToSet, (err, data) => {console.log(data, err);
                    if (err) {
                        cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
                        return;
                    }
                    cb(null, data);
                    return;
                });
            }
            //]
    }, (err, response) => {
        callback(response.case);
    });
}

/**API to update the case */
let updateCase = (data, callback) => {
    async.auto({
        caseUpdate: (cb) => {
            if (!data.id) {
                cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.PARAMS_MISSING })
                return;
            }
            var criteria = {
                id: data.id,
            }
            var dataToSet = {
                "ID": data.id,
                "title": data.title,
                "type": data.type? data.type : '',

            }
            console.log(criteria, 'test', dataToSet);
            caseDAO.updateCase(criteria, dataToSet, (err, data) => { console.log(data);
                if (err) {
                    cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                } else {
                    cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DATA_UPDATED, "result": dataToSet });
                }
            });
        }
    }, (err, response) => {
        callback(response.caseUpdate);
    });
}

/**API to approve the case */
let approveCase = (data, callback) => { console.log(data)
    async.auto({
        caseApprove: (cb) => {
            if (!data.id) {
                cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.PARAMS_MISSING })
                return;
            }
            var criteria = {
                id: data.id,
            }
            console.log(criteria);
            caseDAO.approveCase(criteria, (err, data) => { console.log(data);
                if (err) {
                    cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                } else {
                    cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DATA_UPDATED });
                }
            });
        }
    }, (err, response) => {
        callback(response.caseApprove);
    });
}
/**API to delete the subject */
let deleteCase = (data, callback) => {
    console.log(data, 'data to set')
    async.auto({
        removeCase: (cb) => {
            if (!data.ID) {
                cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.PARAMS_MISSING })
                return;
            }
            var criteria = {
                id: data.ID,
            }
            caseDAO.deleteCase(criteria, (err, dbData) => {
                if (err) {
                    console.log(err);
                    cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                }
                cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DELETE_DATA });
            });
        }
    }, (err, response) => {
        callback(response.removeCase);
    });
}

/***API to get the case list */
let getCase = (data, callback) => {
    async.auto({
        case: (cb) => {
            caseDAO.getCase({}, (err, data) => {
                if (err) {
                    console.log(err)
                    cb(null, { "errorCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                }
                cb(null, data);
                return;
            });
        }
    }, (err, response) => {
        callback(response.case);
    })
}
let getFitnessCase = (data, callback) => {
    async.auto({
        case: (cb) => {
            caseDAO.getFitnessCase({}, (err, data) => {
                if (err) {
                    console.log(err)
                    cb(null, { "errorCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                }
                cb(null, data);
                return;
            });
        }
    }, (err, response) => {
        callback(response.case);
    })
}
let getDietCase = (data, callback) => {
    async.auto({
        case: (cb) => {
            caseDAO.getDietCase({}, (err, data) => {
                if (err) {
                    console.log(err)
                    cb(null, { "errorCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                }
                cb(null, data);
                return;
            });
        }
    }, (err, response) => {
        callback(response.case);
    })
}
/***API to get the case detail by id */
let getCaseById = (data, callback) => {
    async.auto({
        case: (cb) => {
            let criteria = {
                "id": data.id
            }
            console.log(data.id);
            caseDAO.getCaseDetail(criteria, (err, data) => {
                if (err) {
                    console.log(err, 'error----');
                    cb(null, { "errorCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                }
                cb(null, data[0]);
                return;
            });
        }
    }, (err, response) => {
        callback(response.case);
    })
}

module.exports = {
    createCase: createCase,
    updateCase: updateCase,
    deleteCase: deleteCase,
    getCase: getCase,
    getCaseById: getCaseById,
    approveCase: approveCase,
    getFitnessCase: getFitnessCase,
    getDietCase: getDietCase
};