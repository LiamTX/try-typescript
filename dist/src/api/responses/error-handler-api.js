"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onError = void 0;
function onError(res, message, err) {
    console.log("Error: " + err);
    res.status(500).send(message);
}
exports.onError = onError;
