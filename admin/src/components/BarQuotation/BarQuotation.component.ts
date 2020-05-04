import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-BarQuotation',
  templateUrl: './BarQuotation.component.html',  
})
export class BarQuotationComponent implements OnInit {
    
    @Input() Quote: any;
    exchangeName: string;
    percentToday: number;

    min: number;
    max: number;
    currentValue: number;

    positive: string = "#27ae60";
    negative: string = "#e74c3c"

    constructor() { }

    ngOnInit() { 
        this.exchangeName = this.Quote.exchangeName;
        this.percentToday = this.Quote.percentToday;
        this.min = this.Quote.min;
        this.max = this.Quote.max;  
        this.currentValue = this.Quote.currentValue;      
     }

     get currentValueBar(){
         let max = 89;
         let baseCalc = this.max - this.min;
         let current = this.currentValue - this.min;
         let getPercent = current / baseCalc * 100;
         return getPercent / max * 100;
     }

     get GetTypeOfOscilation(){
         return this.percentToday >= 0 ? this.positive : this.negative;
     }
}
