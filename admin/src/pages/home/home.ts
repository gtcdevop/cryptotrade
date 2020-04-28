import { MercadobitcoinProvider } from './../../providers/mercadobitcoin/mercadobitcoin';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mensagem: string;

  constructor(public navCtrl: NavController,
    private mbP: MercadobitcoinProvider,

  ) {

  }

  buscarlivro() {
    this.mensagem = this.mbP.generateTapiCode(this.mensagem)
  }

}
