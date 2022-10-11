import { style } from "@angular/animations";
import { Component } from "@angular/core"; //this automatically made itself when I made the @component decorator

//The @ is called a decorator. It is required for making a component.
@Component({
  selector: 'app-server', //make sure not to name this something that will override built in ts commands
  templateUrl: './server.component.html', //This needs to be created and will be an html file.
  styleUrls: ['./server.component.css']
})
export class ServerComponent  {
  serverId = 10;
  serverStatus = 'offline';
  serverCreationStatus = 'No server was created!';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor()  {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
