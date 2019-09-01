import {notify} from "../../libraries/pushover";
import {BinaryValue, Gpio} from "onoff";

export default class Doorbell {
    private button: Gpio;

    public constructor() {
        this.button = new Gpio(3, 'in', 'both');

        this.listen()
    }

    private listen() {
        this.button.watch(this.onButtonValueChanged);
    }

    private onButtonValueChanged(error: Error | null | undefined, value: BinaryValue) {
        if (null !== error) {
            console.log(error);
        }

        if (1 === value) {
            this.onRing();
        }
    }

    private onRing() {
        notify({
            message: 'One person has pressed the button!!!!',
            title: 'Doorbell',
            sound: 'bugle',
        });
    }
}