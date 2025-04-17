import { Component, Output, EventEmitter, output, signal, inject} from '@angular/core';
import type { investmentUserData } from './user-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<investmentUserData>();
  calculate = output<investmentUserData>();
  private investmentService = inject(InvestmentService)

  // enteredInitialInvestment = "0";
  // enteredAnnualInvestment = "0";
  // enteredExpectedReturn = "5";
  // enteredDuration = "10";

  // Using signals
  enteredInitialInvestment = signal<string>("0");
  enteredAnnualInvestment = signal<string>("0");
  enteredExpectedReturn = signal<string>("5");
  enteredDuration = signal<string>("10");


  onCalculate() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
      });
    // this.calculate.emit(
    //   {
    //   initialInvestment: +this.enteredInitialInvestment(),
    //   duration: +this.enteredDuration(),
    //   expectedReturn: +this.enteredExpectedReturn(),
    //   annualInvestment: +this.enteredAnnualInvestment(),
    //   }
    // )
    this.enteredInitialInvestment.set("0");
    this.enteredAnnualInvestment.set("0");
    this.enteredExpectedReturn.set("5");
    this.enteredDuration.set("10");
  }
}