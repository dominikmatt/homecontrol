import {notify} from "../../libraries/pushover";
import {BinaryValue, Gpio} from "onoff";

export default class Doorbell {
    private button: Gpio;
    private outPin: Gpio;
    private outBuzzer: Gpio;
    private ringTimeout: number | null = null;

    public constructor() {
        this.button = new Gpio(3, 'in', 'both');
        this.outPin = new Gpio(17, 'out');
        this.outBuzzer = new Gpio(14, 'out');

        this.listen()
    }

    private listen() {
        this.button.watch(this.onButtonValueChanged.bind(this));
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
        this.outPin.write(1);
        this.outBuzzer.write(1);

        // @ts-ignore
        this.ringTimeout = setTimeout(() => {
            this.outPin.write(0);
        }, 2000);

        notify({
            message: 'One person has pressed the button!!!!',
            title: 'Doorbell',
            sound: 'bugle',
        });
    }

    public reset() {
        this.outPin.write(0);
        this.outBuzzer.write(0);
    }
}