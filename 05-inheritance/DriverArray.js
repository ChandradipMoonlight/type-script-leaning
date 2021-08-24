"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(10, 5);
var myCircle = new Circle_1.Circle(0, 0, 3);
var myRectangle = new Rectangle_1.Rectangle(0, 0, 11, 15);
//declare an array of the shapes ..intially empty.
var theSahpes = [];
// add the shapes to the array.
theSahpes.push(myShape);
theSahpes.push(myCircle);
theSahpes.push(myRectangle);
for (var _i = 0, theSahpes_1 = theSahpes; _i < theSahpes_1.length; _i++) {
    var temShape = theSahpes_1[_i];
    console.log(temShape.getInfo());
}