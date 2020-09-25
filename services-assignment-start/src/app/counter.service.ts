import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
    toInactiveClicks = 0;
    toActiveClicks = 0;

    onClickToInactive() {
        this.toInactiveClicks++;
        console.log('To Inactive clicks: ' + this.toInactiveClicks);
    }

    onClickToActive() {
        this.toActiveClicks++;
        console.log('To Active clicks: ' + this.toActiveClicks);
    }
}