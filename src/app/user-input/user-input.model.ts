export interface investmentUserData {
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number;
}

// export type investmentUserData = {
//     initialInvestment: number;
//     duration: number;
//     expectedReturn: number;
//     annualInvestment: number;
// }

export interface investmentData {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number
}

// export type investmentData = {
//     year: number,
//     interest: number,
//     valueEndOfYear: number,
//     annualInvestment: number,
//     totalInterest: number,
//     totalAmountInvested: number
// }