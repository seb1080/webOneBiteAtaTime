class Engine {
  constructor(public horsePower: number, public engineType: string) {}

  start(callback: (startStatus: boolean, engineType: string) => void) {
    window.setTimeout(() => {
      callback(true, this.engineType);
    }, 4000);
  }
}

class Accessory {
  constructor(public accessoryNumber: number, public title: string) {}
}

class Auto {
  private _basePrice: number;
  private _engine: Engine;
  model: string;
  accessoryList: string;

  constructor(basePrice: number, engine:Engine, public make: string, model:string) {
    this.engine = engine;
    this.basePrice = basePrice;
    this.make = make;
    this.model = model;
  }

  get basePrice(): number {
    return this._basePrice;
  }

  set basePrice(value: number) {
    if (value == undefined) throw `Pages number most be define`;
    this._basePrice = value;
  }

  get engine(): Engine {
    return this._engine;
  }

  set engine(value: Engine) {
    if (value == undefined) throw `Pages number most be define`;
    this._engine = value;
  }
}

class Truck extends Auto {
  bedLength: string;
  fourByFour: boolean;
  constructor(basePrice: number, engine: Engine, make:string, model:string, bedLenth:string, fourByFour:bool) {
    super(basePrice, engine, make, model);
  }
}