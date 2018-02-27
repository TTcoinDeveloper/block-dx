import { Component, Input, ViewChild, OnInit, NgZone } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { AppService } from './app.service';
import { Currentprice } from './currentprice';
import { CurrentpriceService } from './currentprice.service';
import { OrderbookService } from './orderbook.service';
import { TabViewComponent } from './tab-view/tab-view.component';
import { SelectComponent } from './select/select.component';

@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.scss']
})
export class OrderformComponent implements OnInit {
  @ViewChild('tabView') public tabView: TabViewComponent;
  @ViewChild('typeSelect') public typeSelect: SelectComponent;

  public symbols:string[] = [];
  public currentPrice: Currentprice;
  public totalPrice = 0;
  public orderTypes: any[];
  public selectedOrderType: any;
  public model: any;

  constructor(
    private decimalPipe: DecimalPipe,
    private appService: AppService,
    private currentpriceService: CurrentpriceService,
    private orderbookService: OrderbookService,
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.model = {};

    this.appService.marketPairChanges.subscribe((symbols) => {
      this.symbols = symbols;
    });
    this.currentpriceService.currentprice.subscribe((cp) => {
      this.currentPrice = cp;
    });

    this.orderbookService.requestedOrder
      .subscribe((order) => {
        this.zone.run(() => {
          const tabIndex = order[4] === 'ask' ? 0 : 1;
          this.tabView.activeTab = this.tabView.tabs[tabIndex];
          this.model = {
            id: order[2],
            amount: order[1],
            totalPrice: order[0] * order[1]
          };
        });
      });

    this.orderTypes = [
      { value: 'market', viewValue: 'Market Order'}
      // { value: 'limit', viewValue: 'Limit Order'}
    ];
  }

  formatNumber(num:string, symbol:string): string {
    const format = symbol !== 'USD' ? '1.8-8' : '1.2-2';
    return this.decimalPipe.transform(num,format);
  }

  calcPrice(event: any) { // without type info
    const enteredValue = event.target.value;
    const currPrice = parseFloat(this.currentPrice.last);
    this.totalPrice = enteredValue * currPrice;
  }

  onOrderSubmit() {
    console.log('Submit order', this.model);
    this.model = {};
  }
}
