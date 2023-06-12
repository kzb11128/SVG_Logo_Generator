# Description
This application automatically creates a SVG logo using your input in node.js command

## User Story
```
AS A developer
I WANT a SVG logo generator
SO THAT I can quickly create a logo
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Technology
Uses the code with:
- [node.js](https://nodejs.org/en/download)
- [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4)
- [Jest](https://jestjs.io)

## Application Walkthrough Video 
Link to the [walkthrough video](https://drive.google.com/file/d/1U0L-_gWNkTL9PvnPQRCVa69E8V_uz67_/view)
