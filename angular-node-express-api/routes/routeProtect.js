const expressJwt = require('express-jwt');



const authenticate = expressJwt({
    secret: "secret"
});
  
module.exports = authenticate;


/*app.use('/api', expressJwt({
    secret: "secret",
    getToken: function (req, res) {
        if(!req.headers.authorization){
            return res.sendStatus(403);
        }
        else if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
            return req.query.token;
        }
        return res.sendStatus(401);
    }
}).unless({ path: ['/users/authenticate']}));*/