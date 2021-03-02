# Adyen currency convertor

#Final words / handing in
I underestimated the amount of time to get it to be pretty, workable and usable. I chose not to do uint tests, as they were mostly needed for currency conversion. In a normal situation, I would abstracted components more and added unit tests, propTypes or TypeScript. I put a lot of effort in writing this, and chose not to go for a desktop version. However, I am still happy with the result and I would bring this into production.

These things I would do to make it better:

- Add unit tests.
- Add snapshot tests.
- Add custom components for checkboxes and radio.
- Make scaling of the screens a bit more fool-proof.
- Add user tracking with Google Analytics.
- Ability to choose locale.
- Add option to have target currency to sort up, depending on GEO location.
- Make desktop version.
- Add TypeScript.
- Use proper Adyen fonts, colors and sizes ;-).
- Refactor more code.
- Use better caching mechanisms and manage sided-effects, depending on the variation of using the API.
- Memoizing some of the components/data.
- Better performant callbacks in some places.
- Go over the code and change naming.
- Store preferences in local storage.
- Give user feedback on errors.
- More features?

Also did a few small user tests. My initial idea to make a scrollable selection of output currency exchange, failed a little. Two out of three didn't got the concept.

## Plan of attack

First initial steps is to create this document to show the start of the project. It gives some guidelines and decision making before I start working on this. This document will change in time. See it as a living document :-)

I will start the 4 hour timer as an outline for the assignment. I will not include the design and bootstrapping of the React / Redux, as this is not a daily task for me, so it will may consume a little more time than needed.

## Steps

1. The initial NPX react-bootstrapping.
2. Adding the redux-store to it.
3. Upload the design sketch.
4. Create the minimal thing you can make (getting the data, and just convert USD to EUR).
5. Add more functionality to create what the app needs to do.
6. Change design to something more likable.
7. Go from mobile design to desktop design.
8. Polish the design/code.
9. Hand in.

## Way of working

Not entirely sure how to approach this yet, but I think I will start mobile first, ~~and test driven. As tests are capable of spotting rounding issues when I may choose the wrong route to go, it would be easier to spot and adjust, as this is the core of the application.~~

~~I may go TypeScript, but since I have not yet the most experience here, I may do this with PropTypes for now. TypeScript may cost me too much time.~~

## Out of scope

Currency can be a tricky thing. Especially when it comes to output. So I've decided to keep the localisation simple. Just stating I know about this, but choosing it not to do.
