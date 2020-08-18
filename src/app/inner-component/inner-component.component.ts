import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-inner-component',
  templateUrl: './inner-component.component.html',
  styleUrls: ['./inner-component.component.css']
})
export class InnerComponentComponent implements OnInit {

  @Input() firstInput: FormControl;

  @Output() emitOutput: EventEmitter<any> = new EventEmitter();
  newValue = new FormControl('');
  constructor() { }

  ngOnInit() {
    this.newValue.setValue(this.firstInput.value);
  }

  emmit() {
    this.emitOutput.emit({inputData: this.newValue.value});
  }

}
