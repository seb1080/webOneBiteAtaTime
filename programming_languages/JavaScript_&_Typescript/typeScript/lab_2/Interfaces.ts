interface IEngine {
  start(callback: (startStatus: boolean, engineType: string) => void): void;
  stop(callback: (stopStatus: boolean, engineType: string) => void): void;
}

interface IAutoOptions {
  basePrice: number;
  engine: IEngine;
  state: string;
  make: string;
  model: string;
  year: number;
}

interface ITruckOptions extends IAutoOptions {
  bedLength: string;
  fourByFour: boolean;
}

class Engine implements IEngine {
  constructor(public horsePower: number, public engineType: string) {}

  start(callback: (startStatus: boolean, engineType: string) => void) {
    window.setTimeout(() => {
      callback(true, this.engineType);
    }, 1000);
  }

  stop(callback: (stopStatus: boolean, engineType: string) => void) {
    window.setTimeout(() => {
      callback(true, this.engineType);
    }, 1000);
  }
}

class CustomEngine implements IEngine {
  start(callback: (startStatus: boolean, engineType: string) => void) {
    window.setTimeout(() => {
      callback(true, "Custom Engine");
    }, 1000);
  }

  stop(callback: (stopStatus: boolean, engineType: string) => void) {
    window.setTimeout(() => {
      callback(true, "Custom Engine");
    }, 1000);
  }
}

class Auto {
  private _basePrice: number;
  private _engine: Engine;
  state: string;
  make: string;
  model: string;
  year: number;
  accessoryList: string;

  constructor(options: IAutoOptions) {
    this.engine = options.engine;
    this.basePrice = options.basePrice;
    this.make = options.make;
    this.model = options.model;
    this.year = options.year;
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

  constructor(options: ITruckOptions) {
    super(options);
    this.bedLength = options.bedLength;
    this.fourByFour = options.fourByFour;
  }
}
