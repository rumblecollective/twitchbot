# twitchbot
List of known commands

-so 
    Hey everyone, go check out @user at http://www.twitch.tv/user and show them some love!
- This command needs to only be run by mods
- It needs error handling in case theres a typo or user does not exist

Things to do:

- Dynamically generate tags for username, 

- Add commands that play-sound with corresponding sound files
- Make a JSON file for timed responses (sub, follow, random)
- Make a JSON file for basic commands (unchanging commands)
- Make a JSON file for sfx commands
- Make a JSON file for commands that require updating

- Add responses from the bot that don't require the command prefix.
    i.e. if a user says certain keywords, the bot responds with a randomized string.
    -create an array of strings that the bot randomly selects as a response.
    -we will need a randomizer script for node

- How is the bot playing audio from the VPS? Is this even possible? Probably not, but what are some alternatives?

- We want to make the bot as user friendly as possible so that a non-developer wouldn't have much trouble running it.