import { Hobby } from './Hobby';

export class Person{
    public Name: string;
    public Preview: string;
    public Hobby: Hobby;
    constructor(Name: string, Preview: string, Hobby: Hobby){
        this.Name=Name;
        this.Preview=Preview;
        this.Hobby=Hobby;
    }
}