class Engine {
  constructor(public horsePower: number, public engineType: string) {}
}

class Car {
  private _engine: Engine;
  constructor(engine: Engine) {
    this.engine = engine;
  }

  get engine(): Engine {
    return this._engine;
  }
  set engine(value: Engine) {
    if (value == undefined) throw "Supply an engine";
    this._engine = value;
  }
}

function start() {
  console.log(`Car engine start ${this._engine.engineType}`);
}
 