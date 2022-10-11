import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
export class OrderDashboardComponent implements OnInit {

  orders: number[]=[];
  interval!: NodeJS.Timer;
  firstFiveOrders: number[]=[];
  allOtherOrders: number[]=[]

  constructor() { }

  ngOnInit(): void {
  }
generateOrders()  {
  this.interval = setInterval(() => {
    this.orders.push((this.orders[this.orders.length-1]|| 0) +1);
  },2000);
};

stopOrders()  {
  clearInterval(this.interval);
}
}
