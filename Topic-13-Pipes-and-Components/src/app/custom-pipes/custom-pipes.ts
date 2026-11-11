import { Component } from '@angular/core';
import { CurrencyConvertorPipe } from './currency-convertor/currency-convertor-pipe';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-custom-pipes',
  imports: [CurrencyConvertorPipe, CurrencyPipe],
  templateUrl: './custom-pipes.html',
  styleUrl: './custom-pipes.css',
})
export class CustomPipes {
  amount = 10;
}