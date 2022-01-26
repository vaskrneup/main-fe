export class DataManager {
    constructor(public data: any) { }

    public getAllData = () => {
        return this.data;
    }

    public get = (key: any) => {
        return this.data[key]
    }
}