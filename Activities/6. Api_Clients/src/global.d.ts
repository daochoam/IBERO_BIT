export {};

declare global {
    interface IDataUsers {
        CC: number,
        Name: string,
        LastName: string,
        Age: number
        Address: string,
        Phone: number
    }

    var userData: IDataUsers[] = [];
}

