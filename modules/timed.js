module.exports = {
    
    // setIneterval on messageFunction
    timedFunction: function() {
        client.on("logon", function () {
            setInterval(messageFunction, 100);
        });
    },

    // Timed message to be displayed 
    messageFunction: function() {

        console.log("test");
        // client.say("tonyrumble", "If you enjoy the Next Level Streamwave, consider subscribing to the channel to recieve exclusive access to previous broadcasts, SSH access to our community Github, dank sub emotes and badges! More support = more streams!");
    },
}
