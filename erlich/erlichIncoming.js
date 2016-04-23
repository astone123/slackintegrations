var request = require('request');

module.exports = function (req, res, next) {

    var botPayload = {};
    botPayload.channel = req.body.channel_id;
    botPayload.username = "Erlich Botman";

    var responses = ["You just brought piss to a shit fight.",
                    "Your muffins smell like shit and so do your ideas.",
                    "Line 'em up, nuts to butts.",
                    "Your logo looks like a sideways vagina... I find that to be racist.",
                    "We'll call you when we want pleated khakies.",
                    "What kind of monster puts artisanal butter in the freezer?",
                    "Here's my concern: Who the hell picked out that shirt for you?",
                    "I'm a pro. I won't apologize for it.",
                    "You just disappeared up your own ass hole.",
                    "Functionally, all I've really achieved is running a flop house where guys have shat, jerked off, and paid me no rent.",
                    "I know that you look at me and see a guy who has it all figured out. And for the most part, you're right, I do.",
                    "Time is a sphere...",
                    "A name has to be primal. Something you scream out during intercourse.",
                    "Shit, they were negging us.",
                    "However angry he is, I am one-tenth as angry.",
                    "By no metric could you possibly be considered more attractive than me.",
                    "Everybody involved in the music industry is either stealing it or sharing it. They're all a bunch of assholes. Especially Radiohead.",
                    "Okay, first of all, nobody gives a shit about stealing other people's music.",
                    "I can't have dead weight in my incubator.",
                    "Show some promise for fuck's sake.",
                    "Like NipAlert, it gives you the location of a woman with erect nipples. See, that's something that people want!",
                    "Username, you need to get in touch with humanity.",
                    "No, I heard you.",
                    "A little more about me, I'm a founder of Aviato, and I own a very small percentage of Grindr.",
                    "What I sold Aviato, it gave me a house, money, fancy clothes, and a universal respect from all the ladies.",
                    "The fuck you will be.",
                    "You smoke weed?",
                    "Remember to be an asshole... a real asshole.",
                    "Take Aviato. It's not a name that I found, it's a name that found me.",
                    "I'm sorry...your voice really doesn't reach that register when you ejaculate, does it?",
                    "Go for Erlich.",
                    "I'll be back in 24 to 72 hours. Have a cold pitcher of water and some orange slices ready for me...",
                    "You know what? I'm really gonna go for this motherfucker so have some grapefruit ready for me too.",
                    "Mi casa es mi casa.",
                    "I understand you eat the fish. But when you clean the fish, you can't just leave the fish head and guts and shit in the sink.",
                    "Mother Fuck!",
                    "I suppose Steve and I have always shared a similar asthetic.",
                    "At the end of the day, people only want to see a picture of the board members.",
                    "What the good fuck?",
                    "Have you ever cared too much?",
                    "Since the dawn of time, mankind hath sought to make things smaller."];

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