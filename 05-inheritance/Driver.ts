import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';


let myShape = new Shape(10, 5);

let myCircle = new Circle(0, 0, 3);

let myRectangle = new Rectangle(0, 0, 11, 15);

console.log(myShape.getInfo());
console.log(myCircle.getInfo());
console.log(myRectangle.getInfo());