import {Input, Component, OnInit} from '@angular/core';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {WordFactoryService} from '../word-factory.service';
import {Hero} from '../hero';
import {Service} from '../service';
@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css'],
})
export class DraftComponent implements OnInit {
  @Input() hero: Hero;
  @Input() appraisal: Service;
  draft: any = 'penis';

 // let key='AF5B9M2X'

  // constructor(private http: HttpClient) {}
  ngOnInit() {
    console.log(this.hero);
    // this.word.check('anus');
  }
}
