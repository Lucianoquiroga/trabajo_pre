import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent implements OnInit {

  lat = -32.896404;
  lng = -68.841636;

  constructor() { }

  ngOnInit() {
  }

}
