import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

export interface MobileDevice {
  model: string;
  purchaseDate: string;
  amountPaid: number;
}

export const myMobile: MobileDevice = {
  model: "Samsung Galaxy A73 5G",
  purchaseDate: "2022-09-12",
  amountPaid: 40000
};

@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule],
  templateUrl: './built-in-pipes.html',
  styleUrl: './built-in-pipes.css',
})
export class BuiltInPipes {
  title='built-in pipes';
  name = signal("");
  today = new Date();
  Mobiledata = myMobile; // need to export to the html
}

