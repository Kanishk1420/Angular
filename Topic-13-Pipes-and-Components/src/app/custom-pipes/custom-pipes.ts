import { Component, signal } from '@angular/core';
import { CurrencyConvertorPipe } from './currency-convertor/currency-convertor-pipe';
import { CurrencyPipe } from '@angular/common';
import { TruncatePipe } from './truncate/truncate-pipe';
import { CapitalizeWordsPipe } from './capitalizeWords/capitalize-words-pipe';
import { ReversePipe } from './reverse/reverse-pipe';
import { YesNoPipe } from './yesNo/yes-no-pipe';

@Component({
  selector: 'app-custom-pipes',
  imports: [CurrencyConvertorPipe, CurrencyPipe, TruncatePipe,CapitalizeWordsPipe,ReversePipe, YesNoPipe],
  templateUrl: './custom-pipes.html',
  styleUrl: './custom-pipes.css',
})
export class CustomPipes {
  amount = 10;
  title_1 = 'curse of immortality'
  title_2 = 'blessing of immortality'
  isActive = true;
  isAdmin = false;
}