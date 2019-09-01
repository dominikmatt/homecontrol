"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const pushover_notifications_1 = __importDefault(require("pushover-notifications"));
const connectPushover = () => {
    return new pushover_notifications_1.default({
        user: process.env['PUSHOVER_USER'],
        token: process.env['PUSHOVER_TOKEN'],
    });
};
exports.notify = (message) => {
    const msg = {
        message: message.message,
        title: message.title,
        sound: message.sound || 'magic',
        device: process.env['PUSHOVER_DEVICE'],
        priority: 1
    };
    connectPushover()
        .send(msg, (error) => {
        if (error) {
            throw new error;
        }
    });
};
//# sourceMappingURL=pushover.js.map