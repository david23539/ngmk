import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  colors = [
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose',
    'dark'
  ];

  constructor() { }

  ngOnInit() {
  }

}
