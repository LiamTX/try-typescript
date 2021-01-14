"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var api_1 = __importDefault(require("./api/api"));
var error_handler_api_1 = require("./api/error-handler-api");
var server = http_1.default.createServer(api_1.default);
api_1.default.use(error_handler_api_1.errorHandlerApi);
var port = 3333 || process.env.PORT;
server.listen(port, function () { return console.log('Started!'); });
