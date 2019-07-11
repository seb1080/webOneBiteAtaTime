module demo_2 {
  interface SquareFunction {
    (x: number):number;
  }

  interface Rectangle {
    h: number;
    w?: number;
  }


  const squareItBasic: SquareFunction = (num) => num * num;

  const squareIt = (rect: Rectangle): number => (rect.h * rect.w);
}