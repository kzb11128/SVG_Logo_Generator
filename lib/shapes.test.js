
const shape = require('./shapes.js');

describe('shape', () => {
    describe('circle', () => {
        it('should return a circle', () => {
            const circle = new shape.circle();
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
        });
    });
    describe('rectangle', () => {
        it('should return a rectangle', () => {
            const rectangle = new shape.rectangle();
            expect(rectangle.render()).toEqual('<rect x="75" y="50" width="150" height="100" fill="blue" />');
        });
    });
    describe('triangle', () => {
        it('should return a triangle', () => {
            const triangle = new shape.triangle();
            expect(triangle.render()).toEqual('<polygon points="150,0 0,300 300,300" fill="green" />');
        });
    });
}
);