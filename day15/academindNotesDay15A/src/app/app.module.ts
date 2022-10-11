import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight-directive';
import { ClassNotesComponent } from './class-notes/class-notes.component';
import { BetterHighlightDirectiveDirective } from './better-highlight-directive/better-highlight-directive.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClassNotesComponent,
    BasicHighlightDirective,
    BetterHighlightDirectiveDirective,
    UnlessDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
