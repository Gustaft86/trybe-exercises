/* 
const assert = require('assert')

const rectangleArea = (width, height) => width * height

const rectangle1 = [1, 2]
const rectangle2 = [3, 5]
const rectangle3 = [6, 9]
const rectangles = [rectangle1, rectangle2, rectangle3]

for(rectangle of rectangles) {
    assert.strictEqual(rectangleArea(), rectangle[0]*rectangle[1]) // altere a chamada da funcao rectangleArea
} 
*/

const assert = require('assert')

const rectangleArea = (width, height) => width * height

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];

console.log(rectangleArea(...rectangle1));
console.log(rectangleArea(...rectangle2));
console.log(rectangleArea(...rectangle3));

assert.strictEqual(rectangleArea(...rectangle1), rectangle1[0]*rectangle1[1]) // altere a chamada da funcao rectangleArea
assert.strictEqual(rectangleArea(...rectangle2), rectangle2[0]*rectangle2[1]) // altere a chamada da funcao rectangleArea
assert.strictEqual(rectangleArea(...rectangle3), rectangle3[0]*rectangle3[1]) // altere a chamada da funcao rectangleArea
