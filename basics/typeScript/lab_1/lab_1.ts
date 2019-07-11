var num:number = 2;

const squareIt = function (rect: {h: number, w?: number} ) {
  if (rect.w === undefined) {
    return rect.h * rect.h;
  }
  return rect.h * rect.w;
}

const squareItSimplest = (h: number = 10, w: number = 10) => h * w;

const sq1 = squareIt({h:10});
console.log( `Rectangle h and w of 10 = ${sq1}`);

const sq2 = squareIt({h:10, w:40});
console.log( `Rectangle h and w of 10 and 40 = ${sq2}`);

const sq3 = squareItSimplest();
console.log( `Rectangle h and w of default values = ${sq3}`);

