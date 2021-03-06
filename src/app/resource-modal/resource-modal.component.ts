import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Resources } from '../shared/models/resource';

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
      name: ['', Validators.required],
      color: ['', Validators.required],
      pantone_value: ['', Validators.required],
      year: ['', Validators.required]
    });
  }

  private submitForm() {
    this.activeModal.close(this.myForm.value);
  }

}
