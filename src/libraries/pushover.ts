// @ts-ignore
import Pushover from 'pushover-notifications'
import {PushoverMessage} from "./pushover-message";

const connectPushover = (): Pushover  => {
    return new Pushover( {
        user: process.env['PUSHOVER_USER'],
        token: process.env['PUSHOVER_TOKEN'],
    })
};

export const notify = (message: PushoverMessage) => {
    const msg = {
        message: message.message,	// required
        title: message.title,
        sound: message.sound || 'magic',
        device: process.env['PUSHOVER_DEVICE'],
        priority: 1
    };

    connectPushover()
        .send(msg, (error: any) => {
            if (error) {
                throw new error;
            }
        })
};