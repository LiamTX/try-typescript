"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = __importDefault(require("./controller"));
var userController;
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        userController = new controller_1.default();
    }
    UserRoutes.prototype.index = function (req, res) {
        return userController.index(req, res);
    };
    UserRoutes.prototype.create = function (req, res) {
        return userController.create(req, res);
    };
    UserRoutes.prototype.findOne = function (req, res) {
        return userController.findOne(req, res);
    };
    UserRoutes.prototype.update = function (req, res) {
        return userController.update(req, res);
    };
    UserRoutes.prototype.destroy = function (req, res) {
        return userController.destroy(req, res);
    };
    return UserRoutes;
}());
;
exports.default = UserRoutes;
