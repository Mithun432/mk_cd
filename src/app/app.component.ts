import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Test1Component } from './test1/test1.component';
import { CommonModule } from '@angular/common';
import { DemoDirective } from './directive/demo.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,DemoDirective], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss' 
})
export class AppComponent {
  title = 'test5';
}
