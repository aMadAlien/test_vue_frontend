export interface Currencies {
    code: string;
    currency: string;
    mid: number;
}

export interface Convertations {
    amount: number;
    from: string;
    from_mid: number;
    result: number;
    to: string;
    to_mid: number;
}

export interface gerenalState {
    url: string;
    firstPageData: Convertations[];
    secondPageData: Currencies[];
    thirdPageData: Currencies[];
    perPage: number;
}