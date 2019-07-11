var Engine = /** @class */ (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    Engine.prototype.start = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    Engine.prototype.stop = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    return Engine;
}());
var CustomEngine = /** @class */ (function () {
    function CustomEngine() {
    }
    CustomEngine.prototype.start = function (callback) {
        window.setTimeout(function () {
            callback(true, 'Custom Engine');
        }, 1000);
    };
    CustomEngine.prototype.stop = function (callback) {
        window.setTimeout(function () {
            callback(true, 'Custom Engine');
        }, 1000);
    };
    return CustomEngine;
}());
