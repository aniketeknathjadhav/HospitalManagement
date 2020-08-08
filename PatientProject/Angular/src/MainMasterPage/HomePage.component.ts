import { Component } from '@angular/core';


@Component({
  
  templateUrl: './HomePage.view.html',
  
})
export class HomePageComponent {
  patiet: number[] = [];
  title = "Home Page of Hospital management";
  public cities2 = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];
constructor(){
  this.patiet.push(212,213,4534,345);
}






}
