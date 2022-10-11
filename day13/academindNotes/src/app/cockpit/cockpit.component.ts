import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onAddActivity() {
    this.activityElements.push({
      type: 'activity',
      name: this.newActivityName,
      content: this.newActivityContent
    });
  }

  onAddIdea() {
    this.activityElements.push({
      type: 'idea',
      name: this.newActivityName,
      content: this.newActivityContent
    });
}
}
