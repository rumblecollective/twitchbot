module.exports = {

    // List of known active commands for the bot
    knownCommands: {
    "project": (client, target, params, context) => {
         client.say(target, "Today we refactoring and learning some object-oriented programming while building a Twitch chat bot in Node.js");
        },
    },
    
    // Identifies that a command was used
    activeCommand: function(msg) {
        return(target, context, params) => {
            let msg = " ";
            client.say(target.msg);
            for (let o of knownCommands) {
                msg = msg += "!" + o + " ";
            }
        }
    },
}