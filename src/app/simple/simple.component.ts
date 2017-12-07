import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnChanges {

  @Input() simpleInput: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    for (let propertyName in changes) {
      let change = changes[propertyName];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);
     
      console.log(`${propertyName}: 
                    currentValue = ${current }, previousValue = ${previous }`);
  }
  }

}
