"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var routes_1 = __importDefault(require("./routes/routes"));
var Api = /** @class */ (function () {
    function Api() {
        this.express = express_1.default();
        this.middlewares();
    }
    Api.prototype.middlewares = function () {
        this.express.use(morgan_1.default('dev'));
        this.express.use(express_1.default.json());
        this.router(this.express);
    };
    Api.prototype.router = function (app) {
        new routes_1.default(app);
    };
    return Api;
}());
;
exports.default = new Api().express;
