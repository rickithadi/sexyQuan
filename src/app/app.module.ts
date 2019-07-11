import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxEditorModule} from 'ngx-editor';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {MatRadioModule} from '@angular/material/radio';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatOptionModule,
  MatSelectModule,
} from '@angular/material';
import {AppComponent} from './app.component';
import {HeroFormComponent} from './hero-form/hero-form.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DraftComponent} from './draft/draft.component';
import {AngularEditorModule} from '@kolkov/angular-editor';

@NgModule({
  imports: [
    BrowserModule,
    MatGridListModule,
    AngularEditorModule,
    MatRadioModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    NgxEditorModule,
    MatOptionModule,
    MatCardModule,
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent, HeroFormComponent, DraftComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
