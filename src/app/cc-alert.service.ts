import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Transaction } from './transaction';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';


// const TransactionUrl = 'https://billingservice-usa.qa.reachlocal.com/transactionDetails?pageNumber=1';
const TransactionUrl = '/api/transaction.json';


@Injectable()
export class CcAlertService {

  constructor(private http: Http) {}

  getCCAlerts(): Observable<Transaction[]>{
    return this.http.get(TransactionUrl)
    .map((response: Response)=> response.json())
    .map((responseData)=>responseData.transactionDetails);

  }

}
