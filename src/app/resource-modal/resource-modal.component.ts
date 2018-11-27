import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Resources } from '../models/resource';

@Component({
  selector: 'app-resource-modal',
  templateUrl: './resource-modal.component.html',
  styleUrls: ['./resource-modal.component.css']
})
export class ResourceModalComponent  {

  @Input()resource: Resources;
  myForm: FormGroup;

  constructor(
   public activeModal: NgbActiveModal,
   private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  private createForm() {
    this.myForm = this.formBuilder.group({
      name: '',
      color: '',
      pantone_value: '',
      year: ''
    });
  }

  private submitForm() {
    this.activeModal.close(this.myForm.value);
  }

}
