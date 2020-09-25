import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    constructor(private loggingService: LoggingService) {}

    addAccount(newAccount: { name: string, status: string }) {
        this.accounts.push(newAccount);
        this.loggingService.logStatusChange(newAccount.status);
    }

    updateStatus(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.loggingService.logStatusChange(newStatus);
    }
}