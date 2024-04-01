import { Component } from '@angular/core';
import { DemoDirective } from '../directive/demo.directive';

@Component({
  selector: 'app-test1',
  standalone: true,
  imports: [DemoDirective],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.scss'
})
export class Test1Component {

}
