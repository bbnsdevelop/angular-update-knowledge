import { TempVariableComponent } from './components/template/temp-variable/temp-variable.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new/new.component';
import { TempBindingComponent } from './components/template/temp-binding/temp-binding.component';
import { ControlFlowComponent } from './components/template/control-flow/control-flow.component';
import { DeferrableViewsComponent } from './components/deferrable-views/deferrable-views.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet, NewComponent, TempBindingComponent,
    TempVariableComponent,
    ControlFlowComponent,
    DeferrableViewsComponent],
  // templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  template: `
    <router-outlet></router-outlet>
    <app-new/>
    <app-temp-binding/>
    <app-temp-variable/>
    <app-control-flow/>
    <app-deferrable-views/>
  `,
})
export class AppComponent {

}
