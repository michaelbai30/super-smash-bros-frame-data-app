# Super Smash Bros. Frame Data App

## About 
The Super Smash Bros Frame Data App is an interactive referential database for Super Smash Bros. Ultimate created with React.js containing the attributes of a fighter's moves and stats. Understanding and studying the frame data of individual characters is crucial for competitive players to excel at a high level, though the intuitive interface of this application makes it appealing for casual and competitive players alike!

## How to Access
The app is hosted at 
https://gleeful-gnome-f3a23c.netlify.app/
courtesy of Netlify.

## How to Use
Utilize the search bar to locate a specific fighter's page.
Alternatively, click on the fighter's logo for seamless navigation.

## About Super Smash Bros Ultimate
Super Smash Bros Ultimate is the fifth installment of the iconic Nintendo-based platform fighter series. Over the years, it has fostered a massive competitive scene, ranging from local and regional contests to international "super major" tournaments. For an in-depth exploration of SSBU, consider visiting the SmashWiki page.

## Understanding Frame Data
In fighting games, speed is measured through "frames" or a single still image. SSBU runs at 60 fps, meaning that each frame represents 1/60th of a second. For instance, when a move's startup is 10 frames, it takes 1/6th of a second before the move can hit the opponent after pressing the attack button.

A deep understanding of frame data is crucial for competitive players, as they are able to better understand the strengths and weaknesses of each fighter and how to play around their various moves.

## Glossary
Here's a breakdown of some terms you might come across:

- **Weight:** How resistant a character is to knockback. Heavier characters have a higher weight.
- **Gravity:** How fast characters fall when airborne measured in units/frame^2.
- **Walk & Run Speed:** The speed at which a character walks and runs measured in units/frame.
- **Grab Speed:** How fast a character can grab the opponent measured in frames.
- **Fastest Out of Shield (OoS) Option:** The fastest move that can be used by the character after shielding. For some characters, a second, more practical option is provided.
- **Startup Frame:** How fast it takes for a move to become active (first able to hit the opponent).
- **Active Frames:** The frames in which the move is able to hit the opponent.
- **Frames End Lag:** Amount of unactionable recovery frames after a move finishes. Higher = worse.
- **Frames on Shield:** Amount of advantage or disadvantage on shield. For instance, a move that is -10 on shield means that the opponent can act 10 frames faster than the player. Lower = worse.
- **Base Damage:** Amount of damage a move does without additional factors taken into account.

## Credits
Frame data was gathered from [this google spreadsheet](https://docs.google.com/spreadsheets/d/16fmsoqDoQaR1eteVk2uuzIH2DB4iQHVrqiG8VRbRA7Q/edit#gid=123650910) courtesy of Zapp Branniglenn as well as webscraped from www.ssbwiki.com individual character pages.

## Future Work 
Rhis application is a simple, yet functional and elegant proof-of-concept for the first 12 fighters in Super Smash Bros. Ultimate. Future work would involve implementing pages for all 85 fighters in Super Smash Bros. Ultimate as well as including images / gifs of each move in question.
