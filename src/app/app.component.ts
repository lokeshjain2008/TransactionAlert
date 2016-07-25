import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { CcAlertService } from './cc-alert.service';
import { Transaction } from './transaction';


// For material css https://github.com/angular/material2/blob/master/GETTING_STARTED.md
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdToolbar } from '@angular2-material/toolbar';

import { TransactionAlertComponent } from './transaction-alert/transaction-alert.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [HTTP_PROVIDERS, CcAlertService],
  directives: [TransactionAlertComponent, MD_BUTTON_DIRECTIVES, MD_CARD_DIRECTIVES, MdToolbar]
})
export class AppComponent implements OnInit{
  title = 'Transaction Alert';
  transactionAlerts: Transaction[] = [];

  constructor(private ccAlert: CcAlertService){

  }

  ngOnInit(){
    this.ccAlert.getCCAlerts()
    .subscribe((data)=>{
      this.transactionAlerts = data;
    });
  }

}
