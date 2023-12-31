const fs = require('fs')
const inquirer = require('inquirer')
const {Circle, Square, Triangle} = require('./lib/shapes')
const Svg = require('./lib/svg')
//import needed modules for dependencies

//questions to be prompted to user
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters\n"
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter a color keyword (OR a hexadecimal number) for text\n"
    },
    {
        type: "list",
        name: "shape",
        message: "Choose shape from list\n",
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color keyword (OR a hexadecimal number) for shape\n"
    }
]
//function to create and render svg data string
function svgLogo(text, textColor, shape){
    var builtSvg = '';
    var userSvg = new Svg();
    userSvg.structureText(text, textColor);
    userSvg.structureShape(shape);
    builtSvg = userSvg.renderSvg();
    return builtSvg ;
};
// function to generate file and input svg data
function writeToFile(fileName, data){
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Svg Logo successfully generated');
        };
    });
};
// function to initialize prompt questions, svg data string, and write to file.
function init() {
    inquirer
        .prompt(questions)
        .then((responses) => {
            console.log(responses);
            var userText = '';
            if (responses.text.length > 0 && responses.text.length < 4){
                userText = responses.text.toUpperCase();
            } else {
                console.log ("Enter valid 3 characters lenght");
                return; 
            }
//            console.log(userText);

            var userTextColor = '';
            if (responses.textColor){
                userTextColor = responses.textColor
            };
//            console.log(userTextColor);

            var userShape = '';
            if (responses.shape){
                userShape = responses.shape
            };
//            console.log(userShape);

            var userShapeColor = '';
            if (responses.shapeColor){
                userShapeColor = responses.shapeColor
            };
//            console.log(userShapeColor);

            let shape = '';
            if (userShape === "Circle"){
//                console.log(userShape);
                shape = new Circle();
            } else if (userShape === "Square"){
//                console.log(userShape);
                shape = new Square();
            } else {
                shape = new Triangle();
            };
            shape.assignColor(userShapeColor);

            let builtSvg = '';
            // invoke svgLogo with available data 
            builtSvg = svgLogo(userText, userTextColor, shape);
            console.log(builtSvg);
            // invoke writeToFile with available data
            writeToFile('logo.svg', builtSvg);
        });
};

init();