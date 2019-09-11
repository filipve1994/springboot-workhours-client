import {Component, OnInit} from '@angular/core';
import {NgForm, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent implements OnInit {

  //https://www.techiediaries.com/build-angular-form/

  contactForm: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.createContactForm();
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
  }

  onSubmit2() {
    console.log('Your form2 data : ', this.contactForm.value );
  }

  createContactForm() {
    this.contactForm = this.formBuilder.group({
      fullName2: [''],
      email2: [''],
      message2: ['']
    });
  }

}
