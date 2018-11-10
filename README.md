# twitchbot

##Things to do

- Put functions inside object literals
- Refactor onMessageHandler
    - Multiple modules need to be accessed 
    - e.g. line 63 of app.js, only one module is being called 
- Get timed messages working
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


# Static commands
