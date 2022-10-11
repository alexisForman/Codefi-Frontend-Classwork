import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BobComponent } from './about/bob/bob.component';
import { SusanComponent } from './about/susan/susan.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const approutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent,
  children: [
    { path: "susan", component: SusanComponent },
    { path: "bob", component: BobComponent}
  ]},
  { path: "contacts", component: ContactsComponent},
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private route: ActivatedRoute)  {}

}
