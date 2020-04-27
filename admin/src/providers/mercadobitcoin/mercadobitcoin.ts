import { Exchange } from './../../factory/exchangeInterface';
import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { BookOrder } from '../../model/BookOrder';


/**
 * MercadoBitcoinProvider
 */
@Injectable()
export class MercadobitcoinProvider implements Exchange {

  constructor(public http: HttpClient) {
  }

  setAuth() {

  }

  buyCrypto(coin: Coins, ammount: number): Promise<any> {
    return new Promise((acc, reject) => {
      console.log("Comprar Crypto ")
    })

  }

  getBallance() {

  }

  getBookOrders(coin: Coins): BookOrder {
    return {} as BookOrder
  }
}
