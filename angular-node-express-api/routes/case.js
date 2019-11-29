let express = require('express'),
    router = express.Router(),
    util = require('../Utilities/util'),
    caseService = require('../Services/case');
    var protecc = require('./routeProtect');

/**Api to create case */
router.post('/create-case', protecc, (req, res) => {
    caseService.createCase(req.body, (data) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(data);
    });
});

// /**Api to update case */
router.put('/update-case', protecc, (req, res) => {
    caseService.updateCase(req.body, (data) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(data);
    });
});

router.get('/approve-case', protecc, (req, res) => {
    console.log(req.body);
    caseService.approveCase(req.query, (data) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(data);
    });
});

// /**Api to delete the case */
router.delete('/delete-case', protecc, (req, res) => {
    caseService.deleteCase(req.query, (data) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(data);
    });
});

/**Api to get the list of case */
router.get('/get-case',protecc, (req, res) => {
    caseService.getCase(req.query, (data) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(data);
    });
});

router.get('/get-fitness-case',protecc, (req, res) => {
    caseService.getFitnessCase(req.query, (data) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(data);
    });
});
router.get('/get-diet-case',protecc, (req, res) => {
    caseService.getDietCase(req.query, (data) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(data);
    });
});

// /**API to get the case by id... */
router.get('/get-case-by-id', protecc, (req, res) => {
    caseService.getCaseById(req.query, (data) => {
        res.send(data);
    });
});

module.exports = router;