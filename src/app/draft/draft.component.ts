import {Input, Component, OnInit} from '@angular/core';
import {AngularEditorConfig} from '@kolkov/angular-editor';
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

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '250px',
    minHeight: '20px',
    placeholder: 'Enter text here...',
    translate: 'no',
  };
  // let key='AF5B9M2X'
	constructo(){
this.draft=''
this.appraisal=appraisal
this.hero=hero
	}

  ngOnInit() {
    console.log(this.hero);
  }
}
