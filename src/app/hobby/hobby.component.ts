import { Component, Input, OnInit } from '@angular/core';
import { Hobby } from '../Hobby';
import { Person } from '../Person';
import {PersonService} from "../person.service"
@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})



export class HobbyComponent implements OnInit {
  people: Person[];
  editPerson:Person;
  constructor(private personService:PersonService) { }

  ngOnInit(): void {
    this.people=this.personService.getData()
    this.editPerson=this.people[0];
  }

  edit(person){
    this.editPerson=person;
  }
}
