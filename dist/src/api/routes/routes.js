"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = __importDefault(require("../../modules/User/routes"));
var Routes = /** @class */ (function () {
    function Routes(router) {
        this.userRoutes = new routes_1.default();
        this.getUserRoutes(router);
    }
    Routes.prototype.getUserRoutes = function (router) {
        router.get('/api/users', this.userRoutes.index);
        router.post('/api/users', this.userRoutes.create);
        router.get('/api/users/:id', this.userRoutes.findOne);
        router.put('/api/users/:id', this.userRoutes.update);
        router.delete('/api/users/:id', this.userRoutes.destroy);
    };
    return Routes;
}());
;
exports.default = Routes;
