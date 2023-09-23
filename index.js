const fs = require('fs')
const inquirer = require('inquirer')
const {Circle, Square, Triangle} = require('./lib/shapes')
const Svg = require('./lib/svg')

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters\n"
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter a color keyword (OR a hexadecimal number)\n"
    },
    {
        type: "list",
        name: "shape",
        message: "Choose shape from list\n",
        choices: ['Ciricle', 'Square', 'Triangle']
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color keyword (OR a hexadecimal number)\n"
    }
]

function svgLogo(responses){
    var userSvg = new Svg();
    userSvg.structureText(userText, userTextColor);
    userSvg.strcutureShape(userShape);
    builtSvg = svgLogo.renderSvg();
};

function init() {
    inquirer
        .prompt(questions)
        .then((responses) => {
            console.log(responses);
            svgLogo(responses)
        })
}
// userText = text
//userTextColor= color
//userShape = shape ( color and shape)

init();