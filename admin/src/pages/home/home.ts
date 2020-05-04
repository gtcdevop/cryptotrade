import { Coins } from './../../model/Coins';
import { MercadobitcoinProvider } from './../../providers/mercadobitcoin/mercadobitcoin';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mensagem: string;
  quote: any = {
    exchangeName: "Mercado BitCoin",
    percentToday: 3.40,
    min: 15786.44,
    max: 23543.24,
    currentValue: 20132.30
}

  constructor(public navCtrl: NavController,
    private mbP: MercadobitcoinProvider,

  ) {

  }

  buscarlivro() {
   this.mbP.getBookOrders(Coins.BTC)
  }

}
