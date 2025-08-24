import { Directive } from '@angular/core';

@Directive({
  selector: '[appCheckIsDone]',
  standalone: true
})
export class CheckIsDoneDirective {

  constructor() { }

}
