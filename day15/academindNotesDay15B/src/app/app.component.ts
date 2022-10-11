import { Component, OnInit } from '@angular/core';
import { AccountsService } from './account/accounts.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit()  {
    this.accounts = this.accountsService.accounts;
  }


}



// I no longer need any of this because I made a service to do this:

// activeUsers = ['Max', 'Anna'];
// inactiveUsers = ['Chris', 'Manu'];

// onSetToInactive(id: number) {
//   this.inactiveUsers.push(this.inactiveUsers[id]);
//   this.activeUsers.splice(id, 1);
// }

// onSetToActive(id: number) {
//   this.activeUsers.push(this.inactiveUsers[id]);
//   this.inactiveUsers.splice(id, 1);
// }




// This is how we had the app set up before making the account service:
// export class AppComponent {

//   accounts = [
//     {
//       name: 'Master Account',
//       status: 'Active'
//     },
//     {
//       name: 'Test Account',
//       status: 'Inactive'
//     },
//     {
//       name: 'Hidden Account',
//       status: 'Unknown'
//     }
//   ];

  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanges(updateInfo: {id: number, newStatus: string})  {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
// }
