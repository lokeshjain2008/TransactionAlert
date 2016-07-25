import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../transaction';

@Component({
  moduleId: module.id,
  selector: 'transaction-alert',
  templateUrl: 'transaction-alert.component.html',
  styleUrls: ['transaction-alert.component.css']
})
export class TransactionAlertComponent implements OnInit {
  @Input() transaction : Transaction;
  constructor() {}

  ngOnInit() {
  }

}
