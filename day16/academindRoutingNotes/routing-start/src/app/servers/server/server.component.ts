import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server?: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute
              private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params
    .subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    )
  }

  onEdit()  {
    this.router.navigate(['edit', {relativeTo: this.route, queryParamsHandling: 'preserve'}]);
    //relative path required a relative to object to referece what it is relative to.
    // this.router.navigate(['/servers', 'this.server.id', 'edit'])
    //This above is the alternative to a relative path.
  };
}

// Adding a + to the variable makes it get treated as a number instead of a string.
