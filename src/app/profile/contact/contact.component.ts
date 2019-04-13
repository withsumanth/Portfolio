import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { SnotifyService } from 'ng-snotify';
import { environment } from '../../../environments/environment';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  snotifyConfig = environment.snotifyConfig;
  message: any;
  model: any = {};

  constructor(
    private profile: ProfileService,
    private snotify: SnotifyService,
  ) { }

  ngOnInit() {
  }

  contact(f) {
    if (!this.model.name || !this.model.subject || !this.model.email || !this.model.email || !this.model.message) {
      this.message = {type : 'error', text : 'Please enter all the fields'}
      return;
    }
    const email = this.model.email;
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (!regexp.test(email)) {
      this.message = {type : 'error', text : 'Email format is worng'};
      return;
    }
    this.message = {type : '', text : ''}
    const templateParams: any = {
      name: this.model.name,
      email: this.model.email,
      message: 'subject: ' + this.model.subject + ' message: ' + this.model.message
    };
    emailjs.send('gmail', 'template_9ZpRsR6B', templateParams, 'user_lNP7EvKoasgIuzpFcdqvo')
      .then((response) => {
        this.snotify.success('message', 'Success', this.snotifyConfig);
        f.resetForm();
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        this.snotify.error('Something went wrong. Try again later.', 'Error', this.snotifyConfig);
      });
  }

}
