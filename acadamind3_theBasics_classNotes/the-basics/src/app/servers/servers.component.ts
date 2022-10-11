import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = ['Test Server', 'Test Server 2'];

  createNewUserNom = false;
  userNomCreationStatus = 'No user names registered yet!'
  userNom = '';

  constructor() {
    setTimeout(()   =>  {
      this.allowNewServer = true;
      this.createNewUserNom = true;
    }, 2000)
   };

  ngOnInit(): void {
  }
onCreateServer()  {
  this.serverCreated = true;
  this.servers.push(this.serverName);
  this.serverCreationStatus = 'Server was created! Name is '+ this.serverName;
}

onUpdateServerName(event: any)  {
  this.serverName = (<HTMLInputElement>event.target).value;
}

onCreateUserNom()  {
  this.userNomCreationStatus = 'Username was created! The username is '+this.userNom;
  this.userNom='';
}

onAddUserNom(event: any) {
  this.userNom = (<HTMLInputElement>event.target).value;
}

}
