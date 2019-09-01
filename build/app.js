"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv_1 = __importDefault(require("dotenv"));
const doorbell_1 = __importDefault(require("./components/doorbell/doorbell"));
dotenv_1.default.config();
// Create a new express application instance
const app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3000, function () {
});
const doorbell = new doorbell_1.default();
process.on('SIGINT', function () {
    doorbell.reset();
    process.exit();
});
//# sourceMappingURL=app.js.map