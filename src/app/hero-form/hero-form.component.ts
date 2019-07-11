import {Component} from '@angular/core';

import {Hero} from '../hero';
import {Service} from '../service';
export interface Vocation {
  value: string;
  comd: boolean;
  viewValue: string;
}

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent {
  //find out which vocations are comd and auto
  vocations: Vocation[] = [
    {value: '', viewValue: 'ASA', comd: false},
    {value: '', viewValue: 'Log Spec',comd: true},
    {value: '', viewValue: 'AO' ,comd: true},
    {value: '', viewValue: 'CQ',comd: true},
    {value: '', viewValue: 'Storeman',comd: false},
  ];

  model = new Hero('','','','','');
  appraisal = new Service(1, 4);

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
get diagnosticA() {
    return JSON.stringify(this.appraisal);
  }
  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] && form.controls['name'].value; // Dr. IQ
  }

  /////////////////////////////
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
