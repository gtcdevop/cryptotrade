import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UtilfunctionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilfunctionsProvider {

  constructor() {

  }

  public paramsUrlEncode(param: any) {
    var str = "";
    for (var key in param) {
      if (str != "") {
        str += "&";
      }
      str += key + "=" + encodeURIComponent(param[key]);
    }
    return str;
  }

}
