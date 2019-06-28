var num = 2;
var squareIt = function (rect) {
    if (rect.w === undefined) {
        return rect.h * rect.h;
    }
    return rect.h * rect.w;
};
var squareItSimplest = function (h, w) {
    if (h === void 0) { h = 10; }
    if (w === void 0) { w = 10; }
    return h * w;
};
var sq1 = squareIt({ h: 10 });
console.log("Rectangle h and w of 10 = " + sq1);
var sq2 = squareIt({ h: 10, w: 40 });
console.log("Rectangle h and w of 10 and 40 = " + sq2);
var sq3 = squareItSimplest();
console.log("Rectangle h and w of 10 = " + sq3);
