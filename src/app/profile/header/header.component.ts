import { Component, OnInit, AfterViewInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  private fragment: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
    });
  }

  ngAfterViewInit(): void {
   try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) {
    }

  }
}
