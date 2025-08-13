import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NewComponent } from '../new/new.component';

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [CommonModule, NewComponent],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss'
})
export class DeferrableViewsComponent {

}
