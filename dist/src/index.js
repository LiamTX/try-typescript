"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./database/connection");
var api_1 = __importDefault(require("./api/api"));
api_1.default.listen(3333, function () { return console.log('Server started!'); });
