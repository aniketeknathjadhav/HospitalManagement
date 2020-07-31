import { Component } from '@angular/core';
import { analyzeFileForInjectables } from '@angular/compiler';
import { FormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router" ;
import {MessageService} from 'primeng/api';



@Component({
  selector: 'app-root',
  templateUrl: './MasterPage.view.html',
  providers: [MessageService]

})
export class MasterPageComponent {


title = "Master Page of Hospital management";
index: number = -1;

constructor(private messageService: MessageService) {}

onTabClose(event) {
    this.messageService.add({severity:'info', summary:'Tab Closed', detail: 'Index: ' + event.index})
}

onTabOpen(event) {
    this.messageService.add({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
}





}
