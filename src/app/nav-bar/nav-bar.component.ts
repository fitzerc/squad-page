import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'squad-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() SquadName = 'Squad Page';

  constructor() { }

  ngOnInit(): void {
  }

}
