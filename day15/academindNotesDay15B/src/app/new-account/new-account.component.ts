import { Component  } from '@angular/core';
import { sample } from 'rxjs';
import { AccountsService } from '../account/accounts.service';
import { AppComponent } from '../app.component';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent  {

  constructor(private loggingService:LoggingService,
              private accountsService: AccountsService)  {
                this.accountsService.statusUpdated.subscribe(
                  (status: string) => alert('New status: '+status)
                );
              }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus)
    // this.loggingService.logStatusChange(accountStatus);
  }

}

// Because of Hierarchical injection in angular, meaning, if a service is called
// it will be applied to all the child components of the component it is called in,
// if we call the service in app Component, it is already being called in new account
// and Account, so if we call it again, we are overwriting that original instance of it
// and breaking the App. To not break the App, we just need to take the service out of
// the providers Array. Everything else needs to stay the same

// This is how we had this file set up before the accounts service:
// import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { LoggingService } from '../logging.service';

// @Component({
//   selector: 'app-new-account',
//   templateUrl: './new-account.component.html',
//   styleUrls: ['./new-account.component.css'],
//   providers: [LoggingService]
// })
// export class NewAccountComponent  {
//   @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

//   constructor(private loggingService:LoggingService)  {}

//   onCreateAccount(accountName: string, accountStatus: string) {
//     this.accountAdded.emit({
//       name: accountName,
//       status: accountStatus
//     });
//     this.loggingService.logStatusChange(accountStatus);
//   }

// }

// The correct way to let angular instantiate the service is to first make a constructor,
// then import the service file, then add a providers array and putt the service into the
// Array, then call the service with the this instruction as done above.
