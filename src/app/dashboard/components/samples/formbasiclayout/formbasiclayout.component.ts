import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-formbasiclayout',
  templateUrl: './formbasiclayout.component.html',
  styleUrls: ['./formbasiclayout.component.scss']
})
export class FormbasiclayoutComponent implements OnInit {

  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
  }

}
