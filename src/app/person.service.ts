import { Injectable } from "@angular/core";
import { Hobby } from './Hobby';
import { Person } from './Person';

@Injectable()
export class PersonService{
    people:Person[]=[];
    
    getData():Person[]{
        this.people.push(new Person("Дональд Трамп", "../assets/tramp.jpg", new Hobby("Управление страной", "У президента много обязанностей :)")));
        this.people.push(new Person("Джо Байден1", "../assets/baiden.jpg", new Hobby("Управление страной", "У президента много обязанностей :)")));
        this.people.push(new Person("Джо Байден2", "../assets/baiden.jpg", new Hobby("Управление страной", "У президента много обязанностей :)")));
        this.people.push(new Person("Джо Байден3", "../assets/baiden.jpg", new Hobby("Управление страной", "У президента много обязанностей :)")));
        this.people.push(new Person("Джо Байден4", "../assets/baiden.jpg", new Hobby("Управление страной", "У президента много обязанностей :)")));
        this.people.push(new Person("Джо Байден5", "../assets/baiden.jpg", new Hobby("Управление страной", "У президента много обязанностей :)")));
        this.people.push(new Person("Джо Байден6", "../assets/baiden.jpg", new Hobby("Управление страной", "У президента много обязанностей :)")));
        this.people.push(new Person("Джо Байден7", "../assets/baiden.jpg", new Hobby("Управление страной", "У президента много обязанностей :)")));
        this.people.push(new Person("Джо Байден8", "../assets/baiden.jpg", new Hobby("Управление страной", "У президента много обязанностей :)")));
        return this.people;
    }
}