# twitchbot

##Things to do

- It needs error handling in case theres a typo or user does not exist
    https://dev.twitch.tv/docs/v5/reference/users/
        if 200
            return
        else 
            null (no response)
- Add commands that play-sound with corresponding sound files
- Make a separate file for timed responses (sub, follow, random)
- Make a separate file for basic commands (unchanging commands)
- Make a separate file for sfx commands
- Make a separate file for commands that require updating

Things to do:
- Add responses from the bot that don't require the command prefix.
    i.e. if a user says certain keywords, the bot responds with a randomized string.
    -create an array of strings that the bot randomly selects as a response.
    -we will need a randomizer script for node
`
- We want to extend command from List of known commands into the function name and make the string dynamic

- How is the bot playing audio from the VPS? Is this even possible? Probably not, but what are some alternatives?

- We want to make the bot as user friendly as possible so that a non-developer wouldn't have much trouble running it.