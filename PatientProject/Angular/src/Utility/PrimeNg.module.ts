import { NgModule } from '@angular/core';


import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {PasswordModule} from 'primeng/password';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';






const PrimeNgComponents = [
  
    
    AccordionModule,ButtonModule,TableModule,CardModule,ToolbarModule,RadioButtonModule,
    PasswordModule,DialogModule,DropdownModule
];

@NgModule({
  
  
  imports: [
    PrimeNgComponents ],
   exports: [
    PrimeNgComponents ],
  
})
export class PrimeNgModule { }