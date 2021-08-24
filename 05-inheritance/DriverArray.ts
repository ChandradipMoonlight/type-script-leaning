import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';


let myShape = new Shape(10, 5);

let myCircle = new Circle(0, 0, 3);

let myRectangle = new Rectangle(0, 0, 11, 15);

//declare an array of the shapes ..intially empty.

let theSahpes: Shape[] = [];

// add the shapes to the array.

theSahpes.push(myShape);
theSahpes.push(myCircle);
theSahpes.push(myRectangle);

for (let temShape of theSahpes) {
  console.log(temShape.getInfo());
}