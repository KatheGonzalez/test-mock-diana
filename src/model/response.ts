import {Notification} from "./notification";

export class Response<T> {
    data: T;
    notification: Notification;

    constructor(data: T) {
        this.data = data;
        this.notification = new Notification();
    }
}
