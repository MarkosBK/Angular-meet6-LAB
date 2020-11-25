import { Component, OnInit } from '@angular/core';
import { Hobby } from '../Hobby';
import { Person } from '../Person';
@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})



export class HobbyComponent implements OnInit {
  people: Person[] = [];
  constructor() { }

  ngOnInit(): void {
    this.people.push(new Person("Дональд Трамп", "../assets/tramp.jpg", new Hobby("Управление страной", "У президента много обязанностей :)")));
    this.people.push(new Person("Джо Байден", "../assets/baiden.jpg", new Hobby("Управление страной", "У президента много обязанностей :)")));
  }

}
