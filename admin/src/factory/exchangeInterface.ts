import { BookOrder } from "../model/BookOrder";

export interface Exchange {
  setAuth(obj:AnalyserOptions):void;
  getBallance(): void;
  getBookOrders(coin:Coins): BookOrder;
  buyCrypto(coin:Coins, ammount:number): Promise<any>;
}
