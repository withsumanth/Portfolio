import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  exprienceData: any;
  constructor( private profile: ProfileService ) { }

  ngOnInit() {
    this.getExprience();
  }

  getExprience() {
    this.exprienceData = this.profile.projects();
  }

}
