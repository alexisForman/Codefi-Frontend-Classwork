import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  secretMessage = ''
  secretMessageVisible = false;
  clickCount = [];


  constructor() {}

  showSecret()  {
    this.clickCount.push(this.clickCount.length + 1);
    this.secretMessage = 'Youre Awesome!  Thanks for clicking on me!';
    return this.secretMessage;
  }

  ngOnInit(): void {
  }

}
