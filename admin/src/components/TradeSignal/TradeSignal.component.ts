import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-TradeSignal',
  templateUrl: './TradeSignal.component.html',  
})
export class TradeSignalComponent implements OnInit {
    isOpen: boolean = false;
    constructor() { }

    ngOnInit() { 
            
     }     
    
    OpenClose(){
      this.isOpen = !this.isOpen;
    }
}
