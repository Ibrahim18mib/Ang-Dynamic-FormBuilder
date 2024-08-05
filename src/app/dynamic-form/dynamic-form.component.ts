import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IForm } from '../interface/form.interaface';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {
@Input() form!: IForm;;

fb = inject(FormBuilder);

dynamicFormGroup:FormGroup = this.fb.group({});


ngOnInit(): void {
  
}

  

}
