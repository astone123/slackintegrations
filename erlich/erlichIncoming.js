var request = require('request');

module.exports = function (req, res, next) {

    var botPayload = {};
    botPayload.channel = req.body.channel_id;
    botPayload.username = "Erlich Botman";
    botPayload.text = "hi";

    if (req.body.text) {

        send(botPayload, function (error, status, body) {
            if (error) {
                return next(error);
            } else if (status !== 200) {
                // inform user that our Incoming WebHook failed
                return next(new Error('Response: ' + status + ' ' + body));
            } else {
                return res.status(200).end();
            }
        });

    }
};

function send (payload, callback) {

    var uri = "https://hooks.slack.com/services/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";
    console.log(JSON.stringify(payload));

    request({
        uri: uri,
        method: 'POST',
        body: JSON.stringify(payload)
    }, function (error, response, body) {
        if (error) {
            return callback(error);
        }
        callback(null, response.statusCode, body);
    });

}