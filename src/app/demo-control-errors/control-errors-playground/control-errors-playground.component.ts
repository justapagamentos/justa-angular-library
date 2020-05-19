import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-control-errors-playground',
  templateUrl: './control-errors-playground.component.html',
  styleUrls: ['./control-errors-playground.component.scss'],
})
export class ControlErrorsPlaygroundComponent implements OnInit {
  sample: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.sample = this.fb.group({
      fieldOne: ['', [Validators.required]],
      fieldTwo: ['', [Validators.minLength(4)]],
    });
  }
}
