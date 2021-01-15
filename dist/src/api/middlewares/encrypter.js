"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encrypt = void 0;
var bcrypt_1 = __importDefault(require("bcrypt"));
function encrypt(data) {
    return bcrypt_1.default.hashSync(data, 10);
}
exports.encrypt = encrypt;
