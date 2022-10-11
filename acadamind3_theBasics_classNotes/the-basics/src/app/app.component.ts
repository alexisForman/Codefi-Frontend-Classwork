import { Component } from '@angular/core';
import { disableDebugTools, enableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the-basics';

  hideAnswer = false;


changeOQ()  {
  this.hideAnswer = true;
};
closeAnswer() {
  this.hideAnswer = false;
};

}

// Binding to a single CSS class
// To create a single class binding, type the following:

// [class.sale]="onSale"

// Angular adds the class when the bound expression, onSale is truthy,
// and it removes the class when the expression is falsy—with the
// exception of undefined. See styling delegation for more information.

// I need to make it so all the question elements are listening for a click. So on click
// I want to make the openQuestion change from false to true.

// I need to make it so a click makes the question go way and the answer is visible or
// the question can just get smaller so the answer is visible. When open question is
// true I want .answer style disabled, but when it is false I want it enabled.




// toggleAccordion()  {
//   let thisItem = this.parentNode;

//   items.forEach(item=> {
//     if(thisItem == item)  {
//       thisItem.classList.toggle('open');
//       return;
//     }
//     item.classList.remove('open');
//   });
// }

// questions.forEach(question => question.addEventListener('click', toggleAccordion()));

//material UI - look up,
//this is going to open all  use ngIf or something.
//uses input/output
//bootstrap has a way to make accordions
//recheck class 12 notes/step 5
