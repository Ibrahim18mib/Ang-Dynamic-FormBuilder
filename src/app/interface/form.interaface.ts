export interface IForm {
  formTitle: string;
  saveBtnTitle: string;
  resetBtnTitle: string;
  formcontrols: IFormControl[];
}

interface IFormControl {
  name: string;
  label: string;
  value: string;
  options: IOptions[];
  radioOptions: string[];
  placeholder: string;
  class: string;
  type: string;
  validators: IValidator[];
}

interface IOptions {
  id?: number;
  value?: string;
}

interface IValidator {
  validatorName: string;
  message?: string;
  required?: boolean;
  pattern?:string;
  minLength?:string;
  maxLength?:string;
  email?:string;
}
