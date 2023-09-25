const {Circle, Square, Triangle} = require('./shapes')

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

describe('Circle', () => {
    it('Should render correct shape and shape color', () => {
        const shape = new Circle();
        let userShapeColor = 'red'
        shape.assignColor(userShapeColor);
        expect(shape.renderShape()).toEqual(`<circle cx="50%" cy="50%" r="80" fill="red"/>`)
    });
});

describe('Square', () => {
    it('Should render correct shape and shape color', () => {
        const shape = new Square();
        let userShapeColor = 'green'
        shape.assignColor(userShapeColor);
        expect(shape.renderShape()).toEqual(`<rect x="50" height="200" width="200" fill="green"/>`)
    });
});

describe('Triangle', () => {
    it('Should render correct shape and shape color', () => {
        const shape = new Triangle();
        let userShapeColor = 'blue'
        shape.assignColor(userShapeColor);
        expect(shape.renderShape()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="blue"/>`)
    });
});
