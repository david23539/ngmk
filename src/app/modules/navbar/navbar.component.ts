import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() brand: string;
  @Input() color: string = '';
  @Input() type: string = 'default';

  constructor() { }

  ngOnInit() {
  }

}
