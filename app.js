var tmi = require('tmi.js');
var env = require('node-env-file');
// var player = require('play-sound')(opts = {

// })

// Load environment variables
env(__dirname + '/.env');

// Set command prefix
var commandPrefix = '!'

// Define config options
var options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD
    },
    channels: [
        process.env.CHANNELS
    ]
};

// Create a client with our options:
let client = new tmi.client(options)

// Register our event handlers (defined below):
client.on('message', onMessageHandler)
client.on('connected', onConnectedHandler)
client.on('disconnected', onDisconnectedHandler)

// Connect to the chat
client.connect();

// 
// Known commands - Put this in a separate file!
let knownCommands = { cmd, project, so, github }

// !cmd (Commands)
function cmd(target, context, params) {
    // Dynamic output of knownCommands
    var msg = "";//
    for (o in knownCommands) {
        msg = msg + "!" + o + " ";
    }
    client.say(target, msg);
}

// function sub(target, context, params client.say(target,)) {
//     client.say(target, "")
// }

// !project
function project(target, context, params) {
    client.say(target, "Today we are working on building a community Twitch chat bot in Node.js");
}

// !github
function github(target, context, params) {
    client.say(target, "You can visit our community github profile at https://github.com/rumblecollective");
}

// Shoutout
function so(target, context, params) {
    if(context.mod === true || context.badges.broadcaster === '1' )
        client.say(target, `Hey everyone, go check out ${params[0]} at http://www.twitch.tv/${params[0]} and show them some love!`)
}

// Timed messages (Put in a separate file)
// client.on("logon", function () {
//     setInterval(messageFunction, 100000);
// });

// function messageFunction()
// {
// 	client.say("tonyrumble", "test");
// };

// Called every time a message comes in:
function onMessageHandler (target, context, msg, self) {

    if (self) { return } // Ignore messages from the bot
    // This isn't a command since it has no prefix:
    if (msg.substr(0, 1) !== commandPrefix) {
      //console.log(`[${target} (${context['message-type']})] ${context.username}: ${msg}`)
      return
    }
  
    // Split the message into individual words:
    const parse = msg.slice(1).split(' ')
    // The command name is the first (0th) one:
    const commandName = parse[0]
    // The rest (if any) are the parameters:
    const params = parse.splice(1)
  
    // If the command is known, let's execute it:
    if (commandName in knownCommands) {
      // Retrieve the function by its name:
      const command = knownCommands[commandName]
      // Then call the command with parameters:
      command(target, context, params)
      //console.log(`* Executed ${commandName} command for ${context.username}`)
    } else {
      //console.log(`* Unknown command ${commandName} from ${context.username}`)
    }
  }
  // Called every time the bot connects to Twitch chat:
function onConnectedHandler (addr, port) {
    //console.log(`* Connected to ${addr}:${port}`)
  }
  
  // Called every time the bot disconnects from Twitch:
  function onDisconnectedHandler (reason) {
    //console.log(`Disconnected: ${reason}`)
    //process.exit(1)
  }
