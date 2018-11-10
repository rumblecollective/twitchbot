module.exports = {

    // List of known standard commands for the bot
    knownCommands: {
        "github": (client, target, params, context) => { client.say(target, "You can visit our community github profile at https://github.com/rumblecollective");},
        "steam": (client, target, params, context) => { client.say(target, "Steam ID: tony_rumble" );},
        "bnet": (client, target, params, context) => { client.say(target, "Battle.net ID: TonyRumble#1788" );},
        "so": (client, target, params, context) => { 
            if(context.badges != null) {
                if(context.mod === true || context.badges.broadcaster === '1' ) 
                client.say(target, `Hey everyone, go check out ${params[0]} at http://www.twitch.tv/${params[0]} and show them some love!`)
            }
        },
        "vps": (client, target, params, context) => {
            client.say(target, "Tony uses Vultr VPS for cloud hosting. You can run your own server for as low as $2.50 a month! Click here to sign up https://www.vultr.com/?ref=7599226")
        }
    },
    
    // Identifies that a command was used
    standardCommand: function(msg) {

        return(target, context, params) => {
            let msg = " ";
            client.say(target.msg);
            for (let o of knownCommands) {
                msg = msg += "!" + o + " ";
            }
        }   
    },
}