import { Exchange } from './../../factory/exchangeInterface';
import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { BookOrder } from '../../model/BookOrder';
import createHmac from "create-hmac";


/**
 * MercadoBitcoinProvider
 */
@Injectable()
export class MercadobitcoinProvider implements Exchange {


  private readonly BASE_URL:string= "https://www.mercadobitcoin.net/tapi/v3/"


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

  public generateTapiCode(code:string):string {
    var now = Math.round(new Date().getTime() / 1000);
    var hmac = createHmac('sha512', code)
    return hmac.digest("hex") // synchronously get result with optional encoding parameter
  }

}
