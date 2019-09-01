"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pushover_1 = require("../../libraries/pushover");
const onoff_1 = require("onoff");
class Doorbell {
    constructor() {
        try {
            this.button = new onoff_1.Gpio(3, 'in', 'both');
            this.listen();
        } catch (error) {
            console.log(error)
        }
    }
    listen() {
        this.button.watch(this.onButtonValueChanged);
    }
    onButtonValueChanged(error, value) {
        if (null !== error) {
            console.log(error);
        }
        if (1 === value) {
            this.onRing();
        }
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