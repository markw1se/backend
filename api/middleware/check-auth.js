const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        // const token = req.headers.authorization.split(" ")[1];
        // const decoded = jwt.verify(token, process.env.JWT_KEY);
        // req.userData = decoded;
        // TODO: change check-auth
        const token = req.headers.authorization ? req.headers.authorization.split(" ")[1] : null;
        
        if (token) {
            const decoded = jwt.verify(token, process.env.JWT_KEY);
            req.userData = decoded;
        }
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};