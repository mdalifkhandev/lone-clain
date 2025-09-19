export interface parsonalInfo {
    firstName?: string,
    lastName?: string,
}

export interface contactInfo {
    address?: string,
    city?: string,
    state?: string,
    ZipCode?: string
}

export interface profileInfo {
    parsonalInfo:parsonalInfo,
    contactInfo:contactInfo,
    userId:string
}


export interface finalcialInfo {
    annualIncome?: number
    valueOfLandOnership?: number
    electrictiBill?: number
    mobileManyBill?: number
}

export interface User {
    _id: string;
    email: string;
}