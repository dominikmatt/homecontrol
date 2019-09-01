import {notify} from "../../libraries/pushover";

export default class Doorbell {
    public constructor() {
        this.listen()
    }

    private listen() {
        console.log('listen')
        //TODO: listen for input.
    }

    private onRing() {
        notify({
            message: 'One person has pressed the button!!!!',
            title: 'Doorbell',
            sound: 'bugle',
        });
    }
}