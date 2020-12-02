import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../Person';

@Component({
  selector: 'app-edit-person-form',
  templateUrl: './edit-person-form.component.html',
  styleUrls: ['./edit-person-form.component.scss']
})
export class EditPersonFormComponent implements OnInit {

  constructor() { }
  @Input() person:Person;
  ngOnInit(): void {
    
  }

}
