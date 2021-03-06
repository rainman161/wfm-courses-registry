import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PeopleService } from '../shared/services/people.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  private person;
  private isLoading = true;

  constructor(private route: ActivatedRoute, private peopleService: PeopleService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
        this.peopleService.getPersonById(id)
          .subscribe((person) => {
            this.person = person;
            this.isLoading = false;
          });
      }
    );
  }

}
