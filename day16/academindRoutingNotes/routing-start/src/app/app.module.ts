import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { HttpModule } from '.angular/http'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: '/:id/:name', component: UserComponent }
  ] },

  { path: 'servers', component: ServersComponent, children: [
    {path: '/:id', component: ServerComponent },
    { path: '/:id/edit', component: EditServerComponent }
  ] },
  {path: 'not-found', component: PageNotFoundComponent },
  {path: '**', redirectTo: '/not-found' } // This means wild card of all possible undefined routes. This has to be
  //the last route in the set up because routes get applied from top to bottom.
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ServersComponent,
    HomeComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
