"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pushover_1 = require("../../libraries/pushover");
class Doorbell {
    constructor() {
        this.listen();
    }
    listen() {
        console.log('listen');
        //TODO: listen for input.
    }
    onRing() {
        pushover_1.notify({
            message: 'One person has pressed the button!!!!',
            title: 'Doorbell',
            sound: 'bugle',
        });
    }
}
exports.default = Doorbell;
//# sourceMappingURL=doorbell.js.map