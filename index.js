const inquirer = require('inquirer');
const fs = require('fs');
const { circle, rectangle, triangle } = require('./lib/shapes.js');

const generateLogo = ({ text, textColor, shape, shapeColor }) => {
  let shapeInstance;

  switch (shape) {
    case 'circle':
      shapeInstance = new circle();
      break;
    case 'rectangle':
      shapeInstance = new rectangle();
      break;
    case 'triangle':
      shapeInstance = new triangle();
      break;
    default:
      throw new Error('Invalid shape');
  }

  shapeInstance.color = shapeColor;

  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeInstance.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;
};

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for your logo',
      validate: (input) => {
        if (input.length > 3) {
          return 'Logo text should be up to three characters';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color for your text',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for your logo',
      choices: ['circle', 'rectangle', 'triangle'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color for your shape',
    },
  ])
  .then((answers) => {
    const logo = generateLogo(answers);

    fs.writeFile('./examples/logo.svg', logo, (err) => {
      if (err) throw err;
      console.log('Generated logo.svg');
    });
  });