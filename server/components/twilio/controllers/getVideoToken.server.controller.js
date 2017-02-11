const generateVideoToken = require('../actions/generateVideoToken');

module.exports = (req, res) => {
    console.log('in get video token route');
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
