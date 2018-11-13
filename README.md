# twitchbot

##Things to do

- Put functions inside object literals
- Shoutout command needs error handling in case theres a typo or user does not exist
    https://dev.twitch.tv/docs/v5/reference/users/
        if 200
            return
        else 
            null (no response)

- Make a separate file for sfx commands
- Add commands that use play-sound to queue with corresponding sound files
    - uses play-sound npm package. 
    - See https://thisdavej.com/node-js-playing-sounds-to-provide-notifications/
          https://www.npmjs.com/package/play-sound

- Add responses from the bot that don't require the command prefix.
    i.e. if a user says certain keywords, the bot responds with a randomized string.
    -create an array of strings that the bot randomly selects as a response.
    -we will need a randomizer script for node
- We want to make the bot as user friendly as possible so that a non-developer wouldn't have much trouble running it.

# onMessageHandler
let modules = {
  staticModule: static.knownCommands,
  activeModule: active.knownCommands,
  timedModule: timed.knownCommands,
  getCommand: function(command) {
    // Get list of our module objects
    let objs = Object.values(this).slice(0, -1);
    // Initiate the command variable with null
    let c = null;
    // Iterate over each object
    objs.forEach(obj => {
      // Iterate over each key in the object
    	for (let key in obj) {
        // if our key is in our obj
      if (key === command) {f
        // set our c variable to the value
      c = obj[key]
      }
      }})
      // Returns the command or null value if no command is found.
     return c
   }
}
modules.getCommand(commandName)

- Check to make sure that modules.getCommand returns something other than null
- Pass the arguments to the returned function
- Can replace the for loops with Object.values(modules).map()

# Static commands
