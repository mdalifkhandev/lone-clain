export interface parsonalInfo {
    firstName?: string,
    lastName?: string,
    dateOfBirth?: string,
    gender?: string,
}

export interface contactInfo {
    address?: string,
    city?: string,
    state?: string,
    ZipCode?: string
}

export interface profileInfo {
    parsonalInfo: parsonalInfo,
    contactInfo: contactInfo,
    userId: string
}

export interface User {
    _id: string;
    email: string;
}
export type finalcialInfo = {
  annualIncome: string;
  valueOfLandOwnership: string;
  electricityBill: string;
  mobileMoneyBalance: string;
  existingLoanAmount: string | number;
  terms: boolean;
  existingLoan: string | null;
};