import { Injectable, signal } from "@angular/core";

import { investmentData, investmentUserData } from "./user-input/user-input.model";

@Injectable({
    providedIn : "root"
})
export class InvestmentService {
    results = signal<investmentData[] | undefined>(undefined);
    // results : investmentData[] = [];
    
      calculateInvestmentResults(investmentData : investmentUserData) {
        let annualData : investmentData[] = [];
        let investmentValue = investmentData.initialInvestment;
    
        for (let i = 0; i < investmentData.duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (investmentData.expectedReturn / 100);
          investmentValue += interestEarnedInYear + investmentData.annualInvestment;
          const totalInterest = investmentValue -  investmentData.annualInvestment* year - investmentData.initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: investmentData.annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: investmentData.initialInvestment + investmentData.annualInvestment * year,
          });
        }
    
        this.results.set(annualData);
        // this.results = annualData;
      }

}