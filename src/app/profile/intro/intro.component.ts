import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
  }
  downloadResume() {
    const link = document.createElement('a');
    link.download = 'Sumanth_Resume';
    link.href = 'assets/Sumanth_Resume.pdf';
    link.click();

  }
}
