"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pushover_1 = require("../../libraries/pushover");
const onoff_1 = require("onoff");
class Doorbell {
    constructor() {
        this.ringTimeout = null;
        this.button = new onoff_1.Gpio(3, 'in', 'both');
        this.outPin = new onoff_1.Gpio(17, 'out');
        this.outBuzzer = new onoff_1.Gpio(14, 'out');
        this.listen();
    }
    listen() {
        this.button.watch(this.onButtonValueChanged.bind(this));
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
        this.outPin.write(1);
        this.outBuzzer.write(1);
        // @ts-ignore
        this.ringTimeout = setTimeout(() => {
            this.outPin.write(0);
        }, 2000);
        pushover_1.notify({
            message: 'One person has pressed the button!!!!',
            title: 'Doorbell',
            sound: 'bugle',
        });
    }
    reset() {
        this.outPin.write(0);
        this.outBuzzer.write(0);
    }
}
exports.default = Doorbell;
//# sourceMappingURL=doorbell.js.map