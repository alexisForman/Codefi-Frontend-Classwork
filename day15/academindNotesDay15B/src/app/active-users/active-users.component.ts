import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }

  onSetUserToInactive(id: number) {
    this.usersService.setToInactive(id);
  }

}





// This is what this looked like before I made the users service:

// import { Component, EventEmitter, Input, Output } from '@angular/core';

// @Component({
//   selector: 'app-active-users',
//   templateUrl: './active-users.component.html',
//   styleUrls: ['./active-users.component.css']
// })
// export class ActiveUsersComponent {
//   @Input() users:string[];
//   @Output() userSetToInactive = new EventEmitter<number>();

//   constructor() { }

//   onSetUserToInactive(id: number) {
//     this.userSetToInactive.emit(id);
//   }

// }
