import { Component } from '@angular/core';
import { analyzeFileForInjectables } from '@angular/compiler';
import { FormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router" ;

@Component({
  
  templateUrl: './HomePage.view.html',
  
})
export class HomePageComponent {
  patiet: number[] = [];
  title = "Home Page of Hospital management";
constructor(){
  this.patiet.push(212,213,4534,345);
}






}
