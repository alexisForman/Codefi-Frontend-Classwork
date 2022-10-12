import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}

// This is how this was set up before routing:

// import { Component, EventEmitter, Output } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent {
//   collapsed = true;
//   @Output() featureSelcted = new EventEmitter<string>();

//   onSelect(feature:string)  {
//     this.featureSelcted.emit(feature);
//   }

// }
