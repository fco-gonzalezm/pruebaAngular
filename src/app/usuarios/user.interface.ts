export interface User{
    id: number;
    name: string;
    email: string;
    password: string;
    phone: Data;
}

export interface Data{
    number: string;
    citycode: string;
    contrycode: string;

}
