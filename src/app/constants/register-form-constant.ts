import { IForm } from '../interface/form.interaface';

export const registerFormConfig: IForm = {
  formTitle: 'Register Form',
  saveBtnTitle: 'Register',
  resetBtnTitle: 'Reset',
  formcontrols: [ 
    {
      name: 'firstName',
      label: 'First Name',
      value: '',
      placeholder: 'Enter your First Name',
      class: 'col-md-6',
      type: 'text',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: 'First Name Required',
        },
      ],
    },
    {
      name: 'lastName',
      label: 'Last Name',
      value: '',
      placeholder: 'Enter your Last Name',
      class: 'col-md-6',
      type: 'text',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*Last Name Required',
        },
        {
          validatorName: 'minlength',
          minLength: 7,
          message: 'Min char should be 7',
        },
      ],
    },
    {
      name: 'email',
      label: 'Email',
      value: '',
      placeholder: 'Email',
      class: 'col-md-6',
      type: 'email',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*Email Required',
        },
        {
          validatorName: 'email',
          email: 'email',
          message: 'Email is not valid',
        },
      ],
    },
    {
      name: 'mobile',
      label: 'mobile',
      value: '',
      placeholder: 'mobile number',
      class: 'col-md-4',
      type: 'number',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*mobile number Required',
        },
        {
          validatorName: 'maxLength',
          maxLength: 10,
          message: 'max 10 digit',
        },
      ],
    },
    {
      name: 'weight',
      label: 'weight',
      value: '',
      placeholder: 'weight in kgs',
      class: 'col-md-4',
      type: 'number',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*weight number Required',
        },
      ],
    },
    {
      name: 'height',
      label: 'height',
      value: '',
      placeholder: 'height in cms',
      class: 'col-md-4',
      type: 'number',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*height number Required',
        },
      ],
    },
    {
      name: 'gender',
      label: 'gender',
      value: '',
      placeholder: '',
      class: 'col-md-4',
      radioOptions: ['Male', 'Female'],
      type: 'radio',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*gender Required',
        },
      ],
    },
    {
      name: 'trainer',
      label: 'trainer',
      value: '',
      placeholder: '',
      class: 'col-md-4',
      radioOptions: ['Yes', 'No'],
      type: 'radio',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*Selection Required',
        },
      ],
    },
    {
      name: 'package',
      label: 'package',
      value: '',
      placeholder: '',
      class: 'col-md-4',
      options: [
        {
          id: 1,
          value: 'Monthly',
        },
        {
          id: 2,
          value: 'Quaterly',
        },
        {
          id: 3,
          value: 'Yearly',
        },
      ],
      type: 'select',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*Package is Required',
        },
      ],
    },
    {
      name: 'motivation',
      label: 'motivation',
      value: '',
      placeholder: '',
      class: 'col-md-4',
      options: [
        {
          id: 1,
          value: 'Get Fit',
        },
        {
          id: 2,
          value: 'Gain More Muscle',
        },
        {
          id: 3,
          value: 'Weight  Loss',
        },
      ],
      type: 'select',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*Selection is Required',
        },
      ],
    },
    {
      name: 'enquiry',
      label: 'Enquiry',
      value: '',
      placeholder: 'your date please',
      class: 'col-md-4',
      type: 'date',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: 'Enquiry  Date is Required',
        },
      ],
    },
  ],
};
