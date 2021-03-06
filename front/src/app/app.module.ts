import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MercadobitcoinProvider } from '../providers/mercadobitcoin/mercadobitcoin';
import { HttpClientModule } from '@angular/common/http';
import { UtilfunctionsProvider } from '../providers/utilfunctions/utilfunctions';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MercadobitcoinProvider,
    UtilfunctionsProvider
  ]
})
export class AppModule {}
// 91,160 Milhoes Pessoas para trabalhar
//0,32 Taxa mortalidade  - 5%
//
