import { Coins } from './../../model/Coins';
import { UtilfunctionsProvider } from './../utilfunctions/utilfunctions';
import { Exchange } from './../../factory/exchangeInterface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { BookOrder } from '../../model/BookOrder';
import createHmac from "create-hmac";



enum Capabilities {
  listOrder = "list_orders"
}
/**
 * MercadoBitcoinProvider
 */
@Injectable()
export class MercadobitcoinProvider implements Exchange {

  private readonly PRIVATE_TOKEN_PASS: string = "6c2244bdfeac38c1a137b6180260b98721a2b507f0212f81c9a11826e3bc7e1f";

  private readonly BASE_URL: string = "https://www.mercadobitcoin.net"

  private readonly PRIVATE_TOKEN_ID: string = "b380c0843f150b5c6e79e6740d4b9812"

  private readonly REQUEST_PATH: string = '/tapi/v3'

  constructor(public http: HttpClient,
    private utilFuncion: UtilfunctionsProvider
  ) {
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
    var now = Math.round(new Date().getTime() / 1000);
    let params = {
      'tapi_method': 'list_orders',
      'tapi_nonce': now,
      'coin_pair': 'BRLBTC'
    }
    let paramsString: string = this.utilFuncion.paramsUrlEncode(params)

    let hex = this.generateTapiCode(this.PRIVATE_TOKEN_PASS, paramsString);
    //// SE HEADERS
    let headers: any = {
      'TAPI-ID': String(this.PRIVATE_TOKEN_ID),
      'TAPI-MAC': String(hex),
      "Content-Type": "application/x-www-form-urlencoded"
    }

    let options: any = {
      body: null,
      headers: headers,
      params: params,
      responseType: 'json'
    }

    let requestUrl = this.BASE_URL + this.REQUEST_PATH;
    this.http.request("POST", requestUrl, options).toPromise().then(scc => {
      console.info(scc)
    }).catch(err => {
      console.error(err)
    })
    return {} as BookOrder
  }

  private generateTapiCode(code: string, params: any): string {

    var hmac = createHmac('sha512', code).update(params)
    return hmac.digest("hex") // synchronously get result with optional encoding parameter
  }


}
