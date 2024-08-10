import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IForm, IFormControl, IValidator } from '../interface/form.interaface';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent implements OnInit {
  @Input() form!: IForm;

  private fb = inject(FormBuilder);

  dynamicFormGroup: FormGroup = this.fb.group({}, { updateOn: 'submit' });

  ngOnInit(): void {
    console.log('checki', this.form.formcontrols);
    if (this.form?.formcontrols) {
      let formGroup: any = {};
      this.form.formcontrols.forEach((controls: IFormControl) => {
        let controlValidators: any = [];
        if (controls.validators) {
          controls?.validators?.forEach((val: IValidator) => {
            if (val.validatorName === 'required')
              controlValidators.push(Validators.required);
            if (val.validatorName === 'pattern')
              controlValidators.push(Validators.pattern(val.pattern as string));
            if (val.validatorName === 'minlength')
              controlValidators.push(
                Validators.minLength(val.minLength as number)
              );
            if (val.validatorName === 'maxLength')
              controlValidators.push(
                Validators.maxLength(val.maxLength as number)
              );
            if (val.validatorName === 'email')
              controlValidators.push(Validators.email);
          });
        }

        formGroup[controls.name] = [controls.value || '', controlValidators];
      });
      this.dynamicFormGroup = this.fb.group(formGroup);
      console.log(this.dynamicFormGroup);
    }
  }

  onSubmit() {
    console.log(this.dynamicFormGroup.value);
  }

  onReset() {
    console.log(this.dynamicFormGroup.value);
  }

  getErrorMessage(control: IFormControl): string {
    const myFormControl = this.dynamicFormGroup.get(control.name);
    let errorMessage = '';
    control.validators.forEach((val) => {
      console.log(
        { val },
        myFormControl?.hasError(val.validatorName as string)
      );
      if (myFormControl?.hasError(val.validatorName as string)) {
        errorMessage = val.message as string;
      }
    });
    console.log(errorMessage);
    return errorMessage;
  }
}
