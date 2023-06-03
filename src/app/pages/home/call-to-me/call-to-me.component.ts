import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidatorsService } from '../../../shared/services/custom-validators/custom-validators.service';

@Component({
  selector: 'app-call-to-me',
  templateUrl: './call-to-me.component.html',
  styleUrls: ['./call-to-me.component.scss']
})
export class CallToMeComponent {
  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, CustomValidatorsService.email()]),
      whatsapp: new FormControl('', [CustomValidatorsService.phone()]),
      subject: new FormControl('', [Validators.required]),
      observation: new FormControl('', []),
    });
  }

  get buttonDisabled(): boolean {
    return true;
  }
}
