const tmi = require('tmi.js');
const env = require('node-env-file');
const static = require('./modules/static');
const timed = require('./modules/timed');
const active = require('./modules/active');
// const player = require('play-sound')(opts = {});

// Load environment letiables
env(__dirname + '/.env');

// Set command prefix
let commandPrefix = '!'

// Define config options
let options = {
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

// List of modules
let modules = {
    staticModule: static.knownCommands,
    activeModule: active.knownCommands,
    timedModule: timed.messageFunction
}

// Called every time a message comes in:
function onMessageHandler (target, context, msg, self) {

    if (self) { return } // Ignore messages from the bot

    // This isn't a command since it has no prefix:
    if (msg.indexOf(commandPrefix) !== 0) {
    console.log(`[${target} (${context['message-type']})] ${context.username}: ${msg}`)
    return
    }
    
    // Split the message into individual words:
    const parse = msg.slice(1).split(' ')
    // The command name is the first (0th) one:
    const commandName = parse[0]
    // The rest (if any) are the parameters:
    const params = parse.splice(1)
  
    // If the command is known, let's execute it:
    for (let i = 0; i < Object.values(modules).length; i++) {
        if (commandName in Object.values(modules)[i]) {
            // Retrieve the function by its name:
            const command = Object.values(modules)[i][commandName]
      
            // Then call the command with parameters:
            command(client, target, params, context)
            //console.log(`* Executed ${commandName} command for ${context.username}`)
          } else {
            console.log(`* Unknown command ${commandName} from ${context.username}`)
          }
    }
}

// Called every time the bot connects to Twitch chat:
function onConnectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`)
}
  
// Called every time the bot disconnects from Twitch:
function onDisconnectedHandler (reason) {
    console.log(`Disconnected: ${reason}`)
process.exit(1)
}
