import { Component, inject, Input, input } from '@angular/core';
import { InvestmentService } from '../investment.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone : true,
  imports : [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss'
})
export class InvestmentResultsComponent {
  // @Input() investmentData! : investmentData[];
  // investmentData = input<investmentData[]>();

  private investmentService = inject(InvestmentService);

  get investmentData() {
    return this.investmentService.results();
  }
}
