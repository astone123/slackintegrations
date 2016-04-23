var request = require('request');

module.exports = function (req, res, next) {

    console.log("RECEIVED REQUEST");

    var botPayload = {};
    botPayload.channel = req.body.channel_id;
    botPayload.username = "Erlich Botman";
    //botPayload.text = "hi";

    var responses = ["You just brought piss to a shit fight.", "Your muffins smell like shit and so do your ideas.",
                    "Line 'em up, nuts to butts.", "Your logo looks like a sideways vagina... I find that to be racist.",
                    "We'll call you when we want pleated khakies.", "What kind of monster puts artisanal butter in the freezer?",
                    "Here's my concern: Who the hell picked out that shirt for you?", "I'm a pro. I won't apologize for it.",
                    "You just disappeared up your own ass hole.", "Functionally, all I've really achieved is running a flop house where guys have shat, jerked off, and paid me no rent.",
                    "I know that you look at me and see a guy who has it all figured out.", "Time is a sphere...",
                    "A name has to be primal. Something you scream out during intercourse.", "Shit, they were negging us.",
                    "However angry he is, I am one-tenth as angry.", "By no metric could you possibly be considered more attractive than me.",
                    "Everyone involved in the music industry is either stealing it or sharing it. They're all a bunch of assholes. Especially Radiohead."];

    var randIndex = Math.floor((Math.random() * responses.length - 1) + 1);
    console.log("INDEX: " + randIndex);
    botPayload.text = responses[randIndex];
    console.log("RESPONSE: " + responses[randIndex]);


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