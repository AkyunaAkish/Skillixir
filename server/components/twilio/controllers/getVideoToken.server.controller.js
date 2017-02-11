const generateVideoToken = require('../actions/generateVideoToken');

module.exports = (req, res) => {
    generateVideoToken(req, res)
        .then((generateRes) => {
            res.json({
                success: generateRes
            });
        })
        .catch((err) => {
            res.json({
                error: err
            });
        });
};
