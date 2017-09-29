import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { TradehistoryComponent } from './tradehistory.component';
import { PricechartComponent } from './pricechart.component';
import { OpenOrdersComponent } from './open-orders.component';
import { OrderbookComponent } from './orderbook.component';
import { DepthchartComponent } from './depthchart.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DepthchartComponent,
    OpenOrdersComponent,
    OrderbookComponent,
    PricechartComponent,
    TradehistoryComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
