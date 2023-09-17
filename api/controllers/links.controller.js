
const Link = require('../models/link');

exports.links_get_all = (req, res, next) => {
    Link.find()
    .exec()
    .then(docs => {
        console.log('All documents:', docs);
        res.status(200).json({
            docs
        })
        // Handle the retrieved documents here
    })
    .catch(err => {
        // Handle errors here
        console.error('Error:', err);
    });
};