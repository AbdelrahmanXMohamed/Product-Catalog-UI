import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tostar',
  templateUrl: './tostar.component.html',
  styleUrls: ['./tostar.component.css'],
})
export class TostarComponent {
  @Input() message: string = '';
  @Input() color: string = '';
}
