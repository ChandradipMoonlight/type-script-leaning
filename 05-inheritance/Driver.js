"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(10, 5);
var myCircle = new Circle_1.Circle(0, 0, 3);
var myRectangle = new Rectangle_1.Rectangle(0, 0, 11, 15);
console.log(myShape.getInfo());
console.log(myCircle.getInfo());
console.log(myRectangle.getInfo());
