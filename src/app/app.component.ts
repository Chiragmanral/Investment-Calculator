import { Component, inject, signal } from '@angular/core';

import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl : './app.component.scss'
})
export class AppComponent {

  private investmentService = inject(InvestmentService);

  get investmentResult() {
    return this.investmentService.results;
  }
}
