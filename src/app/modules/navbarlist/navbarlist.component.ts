import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'navbarlist',
  templateUrl: './navbarlist.component.html',
  styleUrls: ['./navbarlist.component.scss']
})
export class NavbarListComponent implements OnInit {

  @Input() links = [
    {text: 'Link 1', url: '/'},
    {text: 'Link 2', url: '/'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
